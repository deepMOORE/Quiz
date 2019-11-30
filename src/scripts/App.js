import {QuestionsRepository} from './questions-repository';
import {AnswerGenerator} from './answer-generator';
import {QuestionGenerator} from './question-generator';
import {AnswerViewer} from "./answer-viewer";
import {QuestionViewer} from "./question-viewer";

/** @type {HTMLFormElement} */
let form = document.querySelector('.quiz-form');

export function app() {
    const answerGenerator = new AnswerGenerator();
    const answerViewer = new AnswerViewer();
    const questionGenerator = new QuestionGenerator();
    const questionViewer = new QuestionViewer();

    const questionRepository = new QuestionsRepository();
    let questions = questionRepository.getQuestionUserModels();

    let questionIndex = 0;
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        answerViewer.clear();
        questionViewer.clearHeader();

        let currentQuestion = questions[questionIndex];
        let questionPreviewHTML = questionGenerator.generatePreview(questionIndex + 1); // Normal people start counting with zero
        let questionTextHTML = questionGenerator.generateQuestionText(currentQuestion.text);
        let answersHTML = answerGenerator.generate(currentQuestion.variants, currentQuestion.type);

        answerViewer.view(answersHTML);
        questionViewer.viewHeader(questionPreviewHTML, questionTextHTML);
        questionIndex++;
    })
}



