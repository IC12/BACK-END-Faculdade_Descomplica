import express from "express";
import Messages from "../utils/messages.js";
import courseController from "./CourseController.js";
import evaluationController from "./EvaluationController.js";
import teacherController from "./TeacherController.js";
import userController from "./UserController.js";

let router = express.Router();

router.get("/", function(req, res){
    res.status(200).json({ message: Messages.Alerts.GENERIC_SUCCESS });
});

router.use("/", userController);
router.use("/", courseController);
router.use("/", teacherController);
router.use("/", evaluationController);

export default router;