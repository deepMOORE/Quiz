import {QuestionsRepository} from './Repositories/questions-repository';
import {AnswerGenerator} from './answer-generator';
import {QuestionGenerator} from './question-generator';
import {AnswerViewer} from './answer-viewer';
import {QuestionViewer} from './question-viewer';
import {AnswerService} from './answer-service';
import {toQuestionUserModel} from './utils/toQuestionUserModel';

/** @type {HTMLFormElement} */
let form = document.querySelector('.quiz-form');

const answerGenerator = new AnswerGenerator();
const answerViewer = new AnswerViewer();
const questionGenerator = new QuestionGenerator();
const questionViewer = new QuestionViewer();
const questionRepository = new QuestionsRepository();
const answerService = new AnswerService();

export function app() {
    questionRepository.getQuestions().then(
        (rawQuestions) => {
            let questions = rawQuestions.map(toQuestionUserModel);
            let questionIndex = 0;
            showNextQuestion(questions[0], 0);

            form.querySelector('.buttons>.submit-button').addEventListener('click', function (event) {
                event.preventDefault();

                let currentUserAnswers = answerService.extractUserAnswers(form, questions[questionIndex].type);
                questions[questionIndex].userAnswers = [];
                questions[questionIndex].userAnswers.push(...currentUserAnswers);

                questionIndex++;

                showNextQuestion(questions[questionIndex], questionIndex);
            });

            form.querySelector('.buttons>.back-button').addEventListener('click', function (event) {
                event.preventDefault();

                let currentUserAnswers = answerService.extractUserAnswers(form, questions[questionIndex].type);
                questions[questionIndex].userAnswers = [];
                questions[questionIndex].userAnswers.push(...currentUserAnswers);

                questionIndex--;
                if (questionIndex < 0) {
                    questionIndex = 0;
                }

                showNextQuestion(questions[questionIndex], questionIndex);
            });
        }
    );
}

function showNextQuestion(question, index) {
    answerViewer.clear();
    questionViewer.clearHeader();

    let questionPreviewHTML = questionGenerator.generatePreview(index + 1); // Normal people start counting with zero
    let questionTextHTML = questionGenerator.generateQuestionText(question.text);
    let answersHTML = answerGenerator.generate(question);

    answerViewer.view(answersHTML);
    questionViewer.viewHeader(questionPreviewHTML, questionTextHTML);
}
