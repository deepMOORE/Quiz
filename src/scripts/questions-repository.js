const {toQuestionUserModel} = require('./utils/toQuestionUserModel');

const rawQuestions = require('../fakedb/db');

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
