const {toQuestionAnswer} = require('./utils/toQuestionAnswer');

class QuestionsRepository {
    constructor(rawQuestions) {
        this.questions = rawQuestions;
    }

    getQuestionAnswerModel() {
        return this.questions.map(toQuestionAnswer);
    }

    getQuestionsCount() {
        return this.questions.length;
    }
}

module.exports = QuestionsRepository;