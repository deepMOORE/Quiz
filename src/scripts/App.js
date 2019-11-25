const QuestionsRepository = require('./QuestionsRepository');
const QuestionsService = require('./QuestionsService');
const QuestionsTimer = require('./QuestionsTimer');
const Dialog = require('./Dialog');

function main() {
    const dialog = new Dialog();
    dialog.startupMessage();
    const questionsRepository = new QuestionsRepository('../json/questions.json');
    const questionsService = new QuestionsService();
    const timer = new QuestionsTimer(15000);

    let answers =[];
    let questions = questionsRepository.getQuestions();

    while (questionsService.hasNext(questions) && timer.isTimerEnabled()) {
        let currentQuestion = questions.shift();
        dialog.askQuestionMessage(currentQuestion.text);

        let currentAnswer = questionsService.askNext();
        let rightAnswer = currentQuestion.answer;

        answers.push(currentAnswer === rightAnswer);
    }

    let questionsCount = questionsRepository.getQuestionsCount();
    let rightAnswersCount = questionsService.countRightAnswers(answers);
    dialog.resultOfQuizMessage(rightAnswersCount, questionsCount);

    return 1;
}

module.exports = main;