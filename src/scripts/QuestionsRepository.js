class QuestionsRepository {
    constructor(pathToJsons) {
        this.questions = require(pathToJsons);
    }

    getQuestions() {
        return this.questions;
    }

    getQuestionsCount() {
        return this.questions.length;
    }
}

module.exports = QuestionsRepository;