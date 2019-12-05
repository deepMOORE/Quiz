import {FormViewer} from './form-viewer';
import {QuestionTypes} from '../../scripts/Enums/question-types';

//todo: i work with DOM also in formViewer, think about SRP
let questionSelector = document.querySelector('select.form-control');
let addAnswerButton = document.querySelector('.btn-answer-box>.btn');
let addVariantButton = document.querySelector('.btn-variant-box>.btn');
//todo: make field removing
// let removeInputFieldButton = document.querySelector('.btn-variant-box>.btn');
const formViewer = new FormViewer();

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
}
