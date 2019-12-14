import {FormGenerator} from './form-generator';
import {QuestionTypes} from '../../scripts/Enums/question-types';

export class FormViewer {
    get EmptyInnerHTML() {
        return '';
    }

    get InputAnswers() {
        return document.querySelectorAll('.answer');
    }

    get InputVariants() {
        return document.querySelectorAll('.variant');
    }

    get FormTextarea() {
        return document.querySelector('.form-group>textarea');
    }

    get QuestionTypeSelector() {
        return document.querySelector('.form-group>select');
    }

    get ErrorMessageSpan() {
        return document.querySelector('.error-text');
    }

    get AddVariantButton() {
        return document.querySelector('.btn-variant-box>button');
    }

    get AddAnswerButton() {
        return document.querySelector('.btn-answer-box>button');
    }

    get FormGroupVariants() {
        return document.querySelector('.variants');
    }

    get VariantElement() {
        return document.querySelector('.variants>label>div');
    }

    get AnswerElement() {
        return document.querySelector('.answers>label>div');
    }

    constructor() {
        this.formGenerator = new FormGenerator();
    }

    clearErrorMessage() {
        this.ErrorMessageSpan.innerHTML = this.EmptyInnerHTML;
    }

    viewErrorMessage(message) {
        this.ErrorMessageSpan.innerHTML = this.formGenerator.generateErrorMessage(message);
    }

    viewVariantInputField() {
        let inputField = this.formGenerator.generateInputField('variant');
        this.VariantElement.appendChild(inputField);
    }

    viewAnswerInputField() {
        let inputField = this.formGenerator.generateInputField('answer');
        this.AnswerElement.appendChild(inputField);
    }

    resetInputFields() {
        this.VariantElement.innerHTML = this.formGenerator.generateDefaultInputGroup('variant');
        this.AnswerElement.innerHTML = this.formGenerator.generateDefaultInputGroup('answer');
    }

    viewForm(viewType) {
        switch (viewType) {
            case QuestionTypes.RADIO :
                return this._viewRadio();

            case QuestionTypes.CHECK :
                return this._viewCheck();

            case QuestionTypes.TEXT :
                return this._viewText();
        }
    }

    fillForm(question) {
        this._fillQuestionText(question.text);

        this._fillAnswers(question.answers);

        if (question.variants !== null) {
            this._fillVariants(question.variants);
        }

        this._fillSelector(question.type);
    }

    _fillQuestionText(text) {
        this.FormTextarea.value = text;
    }

    _fillAnswers(answers) {
        let answerVariants = this.InputAnswers;
        let answerIndex = 0;
        for (let answerVariant of answerVariants) {
            answerVariant.value = answers[answerIndex];
            answerIndex++;
        }
    }

    _fillVariants(variants) {
        let inputVariants = this.InputVariants;
        let variantIndex = 0;
        for (let inputVariant of inputVariants) {
            inputVariant.value = variants[variantIndex];
            variantIndex++;
        }
    }

    _fillSelector(questionType) {
        let selector = this.QuestionTypeSelector;
        for (let i = 0; i < 3; i++) {
            if (selector.options[i].value === questionType) {
                selector.selectedIndex = i;
                break;
            }
        }
    }

    addDeletionEventOnLastField(fieldName) {
        let lastAddBox = document.querySelector(`div.form-group.${fieldName}>label>div`).lastChild;
        let lastDeleteButton = lastAddBox.querySelector('.btn');
        // todo: так то я должен переместить из в get, как сам и придумал, но иде ругается, и я не знаю где должен
        //  быть этот метод
        let answerInputFields = document.querySelector('body>div>div>form>div.form-group.answers>label>div');
        let variantInputFields = document.querySelector('body>div>div>form>div.form-group.variants>label>div');

        lastDeleteButton.addEventListener('click', function (event) {
            event.preventDefault();

            //todo: Вот сейчас серьезно, это ненормально же, оно не должно работать, ведь на веб-странице же существует
            // евент вне заисимости от функции, мне кажется это полная дичь
            if (fieldName === 'answers') {
                answerInputFields.removeChild(lastAddBox);
            } else if (fieldName === 'variants') {
                variantInputFields.removeChild(lastAddBox);
            }
        });
    }

    _viewCheck() {
        this.resetInputFields();
        this._setDisplayFeatures('block', 'block', 'block');
    }

    _viewRadio() {
        this.resetInputFields();
        this._setDisplayFeatures('none', 'block', 'block');
    }

    _viewText() {
        this.resetInputFields();
        this._setDisplayFeatures('none', 'none', 'none');
    }

    _setDisplayFeatures(answerView, variantView, variantGroupView) {
        this.ErrorMessageSpan.innerHTML = this.EmptyInnerHTML;
        this.AddAnswerButton.style.display = answerView;
        this.AddVariantButton.style.display = variantView;
        this.FormGroupVariants.style.display = variantGroupView;
    }
}