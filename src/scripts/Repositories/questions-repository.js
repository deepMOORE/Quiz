import {toQuestionUserModel} from '../utils/toQuestionUserModel';
import {toQuestionAdminModel} from '../utils/toQuestionAdminModel';

// todo: this repository using also at admin panel, it's so bad
export class QuestionsRepository {
    get apiUrl() {
        return 'http://localhost:3004/';
    }

    constructor() {
        this.questions = fetch(`${this.apiUrl}${'questions/'}`)
            .then((response) => response.json());
    }

    getQuestions() {
        return fetch(`${this.apiUrl}questions`)
            .then((response) => response.json());
    }

    getQuestionAdminModels() {
        return this.questions.map(toQuestionAdminModel);
    }
}
