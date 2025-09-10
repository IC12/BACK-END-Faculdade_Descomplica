import express from "express";
import fs from "fs";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import userService from "../services/UserService.js";
import Messages from "../utils/messages.js";

let router = express.Router();

// __dirname não existe diretamente em ESModules, então é necessário criar:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    const dir = path.join(__dirname, "..", "images");

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    callback(null, dir);
  },
  filename: function (req, file, callback) {
    callback(
      null,
      req.body.first_name +
        "_" +
        req.body.last_name +
        "_" +
        Date.now() +
        file.originalname
    );
  },
});

const upload = multer({ storage: storage }).single("file");

function buildUserResponse(req, user) {
  if (!user) return null;
  // adiciona URL pública da imagem
 return {
    ...user.dataValues,
    profile_picture: user.profile_picture
      ? `${req.protocol}://${req.get("host")}/userImage/${user.id}`
      : null,
  };
}

router.post("/addUser", async function (req, res) {
  upload(req, res, async function (err) {
    if (err) return res.status(500).send(Messages.Errors.FILE_UPLOAD_FAILED);

    const existingUser = await userService.getUserById(req.body.id);
    if (existingUser)
      return res.status(400).json({ message: Messages.Errors.USER_ALREADY_EXISTS });

    const userModel = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      profile_picture: req.file ? req.file.path : null,
    };

    const user = await userService.saveUser(userModel);
    return res.status(200).json(buildUserResponse(req, user));
  });
});

router.get("/getAllUsers", async function (req, res) {
  const allUsers = await userService.getAllUsers();
  const usersWithUrls = allUsers.map((u) => buildUserResponse(req, u));
  return res.status(200).json(usersWithUrls);
});

router.get("/user/:id", async function (req, res) {
  const user = await userService.getUserById(req.params.id);
  return res.status(200).json(buildUserResponse(req, user));
});

router.get("/userImage/:id", async function (req, res) {
  const user = await userService.getUserById(req.params.id);

  if (!user) return res.status(404).json({ message: Messages.Errors.USER_NOT_FOUND });

  if (!user.profile_picture) return res.status(200).json({ profile_picture: null });

  const imagePath = path.resolve(user.profile_picture);

  // Se o arquivo não existir no disco, também retorna null
  if (!fs.existsSync(imagePath)) return res.status(200).json({ profile_picture: null });

  res.sendFile(imagePath);
});

router.put("/updateUser/:id", async function (req, res) {
  upload(req, res, async function (err) {
    if (err) return res.end(Messages.Errors.FILE_UPLOAD_FAILED);

    const existingUser = await userService.getUserById(req.params.id);
    if (!existingUser) return res.status(404).json({ message: Messages.Errors.USER_NOT_FOUND });

    let newProfilePicture = existingUser.profile_picture;

    if (req.file) {
      newProfilePicture = req.file.path;

      // Remove a imagem antiga se existir
      if (existingUser.profile_picture && fs.existsSync(existingUser.profile_picture)) {
        fs.unlink(existingUser.profile_picture, (err) => {
          if (err) return res.end(Messages.Errors.IMAGE_DELETE_FAILED);
        });
      }
    } else {
      if (!existingUser.profile_picture || !fs.existsSync(existingUser.profile_picture)) {
        newProfilePicture = null;
      }
    }

    await userService.updateUserById(req.params.id, {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      profile_picture: newProfilePicture,
    });

    const updatedUser = await userService.getUserById(req.params.id);

    return res.status(200).json(buildUserResponse(req, updatedUser));
  });
});

router.delete("/deleteUser/:id", async function (req, res) {
  const user = await userService.deleteUserById(req.params.id);
  return res.status(200).json(user);
});

export default router;
