const {toQuestionUserModel} = require('./utils/toQuestionUserModel');

const rawQuestions = require('../fakedb/questions');

export class QuestionsRepository {
    constructor() {
        this.questions = rawQuestions;
    }

    getQuestionUserModels() {
        return this.questions.map(toQuestionUserModel);
    }

    getQuestionsCount() {
        return this.questions.length;
    }
}
