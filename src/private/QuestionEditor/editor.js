import {FormViewer} from './form-viewer';
import {QuestionTypes} from '../../scripts/Enums/question-types';
import {FormService} from './form-service';
import {QuestionsRepository} from '../../scripts/DBContext/questions-repository';

//todo: i work with DOM also in formViewer, think about SRP
let questionSelector = document.querySelector('select.form-control');
let addAnswerButton = document.querySelector('.btn-answer-box>.btn');
let addVariantButton = document.querySelector('.btn-variant-box>.btn');
let formGroup = document.querySelectorAll('.form-group');
let submitQuestion = document.querySelector('.btn-success');
let backButton = document.querySelector('.back-btn');
let logoutButton = document.querySelector('nav>.btn-danger');
const formViewer = new FormViewer();
const formService = new FormService();
const questionRepository = new QuestionsRepository();

export function edit() {
    let url = new URL(window.location.href);
    let questionForEditionId = url.searchParams.get('id');

    if (questionForEditionId === null) {
        formViewer.viewForm(QuestionTypes.RADIO);
    } else {
        questionRepository.getQuestionById(questionForEditionId).then(
            (question) => {
                formViewer.viewForm(question.type);

                if (question.variants !== null) {
                    for (let i = 0; i < question.variants.length - 1; i++) {
                        formViewer.viewVariantInputField();
                    }
                }

                for (let i = 0; i < question.answers.length - 1; i++) {
                    formViewer.viewAnswerInputField();
                }

                formViewer.fillForm(question);
            }
        );
    }

    formGroup.forEach(function (x) {
        x.addEventListener('click', function (event) {
            event.preventDefault();

            formViewer.clearErrorMessage();
        });
    });

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

    backButton.addEventListener('click', function(event) {
        event.preventDefault();

        location.href = '../../views/private/admin-welcome.html';
    });

    logoutButton.addEventListener('click', function(event) {
        event.preventDefault();

        location.href = '../../../index.html';
    });

    submitQuestion.addEventListener('click', function (event) {
        event.preventDefault();

        if (questionForEditionId !== null) {
            questionRepository.removeById(questionForEditionId).then();
        }

        let errorMessage = formService.validateForm();

        if (errorMessage === null) {
            let readyToInsertQuestion = formService.extractForm();

            questionRepository.add(readyToInsertQuestion).then(
                () => location.href = '../../views/private/admin-welcome.html'
            );
        } else {
            formViewer.viewErrorMessage(errorMessage);
        }
    });
}
