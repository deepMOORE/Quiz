const QuestionsRepository = require('./questions-repository');
const QuestionsService = require('./questions-service');
const QuestionsTimer = require('./questions-timer');
const Dialog = require('./dialog');
const rawQuestions = require('../json/questions.json');

function main() {
    const dialog = new Dialog();
    dialog.startupMessage();
    const questionsRepository = new QuestionsRepository(rawQuestions);
    const questionsService = new QuestionsService();
    const timer = new QuestionsTimer(15000);

    let answers =[];
    let questions = questionsRepository.getQuestionAnswerModel();

    while (questionsService.hasNext(questions) && timer.isTimerEnabled()) {
        let currentQuestion = questions.shift();

        let currentAnswer = questionsService.askNext(currentQuestion.text);
        let rightAnswer = currentQuestion.answer;

        answers.push(currentAnswer === rightAnswer);
    }

    let questionsCount = questionsRepository.getQuestionsCount();
    let rightAnswersCount = questionsService.countRightAnswers(answers);
    dialog.resultOfQuizMessage(rightAnswersCount, questionsCount);

    return 1;
}

module.exports = main;