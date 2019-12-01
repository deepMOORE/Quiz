import {QuestionsRepository} from './questions-repository';
import {AnswerGenerator} from './answer-generator';
import {QuestionGenerator} from './question-generator';
import {AnswerViewer} from "./answer-viewer";
import {QuestionViewer} from "./question-viewer";

/** @type {HTMLFormElement} */
let form = document.querySelector('.quiz-form');

const answerGenerator = new AnswerGenerator();
const answerViewer = new AnswerViewer();
const questionGenerator = new QuestionGenerator();
const questionViewer = new QuestionViewer();
const questionRepository = new QuestionsRepository();

export function app() {
    let questions = questionRepository.getQuestionUserModels();

    let questionIndex = 0;
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let currentQuestion = questions[questionIndex];
        showQuestion(currentQuestion, questionIndex);

        questionIndex++;
    });

    form.addEventListener('reset', function (event) {
        event.preventDefault();

        questionIndex--;
        if (questionIndex < 0) {
            questionIndex = 0;
        }

        let currentQuestion = questions[questionIndex];
        showQuestion(currentQuestion, questionIndex);
    })
}

function showQuestion(question, index) {
    answerViewer.clear();
    questionViewer.clearHeader();

    let questionPreviewHTML = questionGenerator.generatePreview(index + 1); // Normal people start counting with zero
    let questionTextHTML = questionGenerator.generateQuestionText(question.text);
    let answersHTML = answerGenerator.generate(question.variants, question.type);

    answerViewer.view(answersHTML);
    questionViewer.viewHeader(questionPreviewHTML, questionTextHTML);
}
