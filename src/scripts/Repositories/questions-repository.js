const {toQuestionUserModel} = require('../utils/toQuestionUserModel');
const {toQuestionAdminModel} = require('../utils/toQuestionAdminModel');

// todo: this repository using also at admin panel, it's so bad
export class QuestionsRepository {
    constructor() {
        /** @type {Array} */
        this.questions = require('../../fakedb/db');
    }

    getQuestionUserModels() {
        return this.questions.map(toQuestionUserModel);
    }

    getQuestionsCount() {
        return this.questions.length;
    }

    getQuestionAdminModels() {
        return this.questions.map(toQuestionAdminModel);
    }
}
