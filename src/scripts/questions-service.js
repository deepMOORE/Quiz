class QuestionsService {
    hasNext(questions) {
        return questions.length > 0;
    }

    askNext(text) {
        return prompt(text);
    }

    countRightAnswers(answers) {
        return answers.filter(x => x === true).length;
    }
}

module.exports = QuestionsService;