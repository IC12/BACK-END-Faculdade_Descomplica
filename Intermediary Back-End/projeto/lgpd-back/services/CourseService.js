import courseRepository from "../repositories/CourseRepository.js";

const saveCourse = (courseModel) => {
    return CourseRepository.saveCourse(courseModel);
}

const getCourseById = (id) => {
    return CourseRepository.getCourseById(id);
}

const getAllCourses = () => {
    return CourseRepository.getAllCourses();
}

const deleteCourseById = (id) => {
    return CourseRepository.deleteCourseById(id);
}

const updateCourseById = (id, courseModel) => {
    return CourseRepository.updateCourseById(id, courseModel);
}

const service = {
    saveCourse,
    getCourseById,
    getAllCourses,
    deleteCourseById,
    updateCourseById
}

export default service;