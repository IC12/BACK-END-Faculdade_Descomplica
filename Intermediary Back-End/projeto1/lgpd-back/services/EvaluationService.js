import evaluationRepository from "../repositories/EvaluationRepository.js";

const saveEvaluation = (evaluationModel) => {
    return EvaluationRepository.saveEvaluation(evaluationModel);
}

const getEvaluationById = (id) => {
    return EvaluationRepository.getEvaluationById(id);
}

const getAllEvaluations = () => {
    return EvaluationRepository.getAllEvaluations();
}

const deleteEvaluationById = (id) => {
    return EvaluationRepository.deleteEvaluationById(id);
}

const updateEvaluationById = (id, evaluationModel) => {
    return EvaluationRepository.updateEvaluationById(id, evaluationModel);
}

const service = {
    saveEvaluation,
    getEvaluationById,
    getAllEvaluations,
    deleteEvaluationById,
    updateEvaluationById
}

export default service;