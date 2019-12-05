import {toQuestionUserModel} from '../utils/toQuestionUserModel';
import {toQuestionAdminModel} from '../utils/toQuestionAdminModel';

// todo: this repository using also at admin panel, it's so bad
export class QuestionsRepository {
    constructor() {
        /** @type {Array} */
        this.questions = require('../../fakedb/db');
    }

    getQuestionUserModels() {
        return this.questions.map(toQuestionUserModel);
    }

    getQuestionAdminModels() {
        return this.questions.map(toQuestionAdminModel);
    }
}
