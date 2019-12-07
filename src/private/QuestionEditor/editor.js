import {FormViewer} from './form-viewer';
import {QuestionTypes} from '../../scripts/Enums/question-types';
import {FormService} from './form-service';
import {QuestionsRepository} from '../../scripts/Repositories/questions-repository';

//todo: i work with DOM also in formViewer, think about SRP
let questionSelector = document.querySelector('select.form-control');
let addAnswerButton = document.querySelector('.btn-answer-box>.btn');
let addVariantButton = document.querySelector('.btn-variant-box>.btn');
let submitQuestion = document.querySelector('.modal-footer>.btn-success');
//todo: make field removing
// let removeInputFieldButton = document.querySelector('.btn-variant-box>.btn');
const formViewer = new FormViewer();
const formService = new FormService();
const questionRepository = new QuestionsRepository();

export function edit() {
    formViewer.viewForm(QuestionTypes.RADIO);

    questionSelector.addEventListener('change', function(event) {
        event.preventDefault();
        formViewer.viewForm(questionSelector.value);
    });

    addAnswerButton.addEventListener('click', function(event) {
        event.preventDefault();

        formViewer.viewAnswerInputField();
    });

    addVariantButton.addEventListener('click', function(event) {
        event.preventDefault();

        formViewer.viewVariantInputField();
    });

    submitQuestion.addEventListener('click', function (event) {
        event.preventDefault();

        let readyToInsertQuestion = formService.extractForm();
        questionRepository.addQuestion(readyToInsertQuestion).then(
            () => location.href = '../../views/private/admin-welcome.html'
        );
    });
}
