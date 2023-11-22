import express from "express";
let router = express.Router();

import courseService from "../services/CourseService.js";

router.post("/addCourse", async function (req, res) {
    const courseModel = {
        name: req.body.name
    }

    const course = await courseService.saveCourse(courseModel);
    return res.status(200).json(course);
});

router.get("/getAllCourses", async function (req, res) {
    const allCourses = await courseService.getAllCourses();
    return res.status(200).json(allCourses);
});

router.get("/course/:id", async function (req, res) {
    const course = await courseService.getCourseById(req.params.id);
    return res.status(200).json(course);
});

router.delete("/deleteCourse/:id", async function (req, res) {
    const course = await courseService.deleteCourseById(req.params.id);
    return res.status(200).json(course);
});

router.put("updateCourse/:id", async function (req, res) {
    const courseModel = {
        name: req.body.name
    }

    const course = await courseService.updateCourseById(req.params.id, courseModel);
    return res.status(200).json(course);
});

export default router;