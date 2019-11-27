import {QuestionsRepository} from './questions-repository';
import {QuestionsService} from './questions-service';
import {Dialog} from './dialog';
const rawQuestions = require('../json/questions.json');

export function main() {
    const dialog = new Dialog();
    dialog.startupMessage();
    const questionsRepository = new QuestionsRepository(rawQuestions);
    const questionsService = new QuestionsService();

    let answers =[];
    let questions = questionsRepository.getQuestionAnswerModel();

    while (questionsService.hasNext(questions)) {
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
