import {FormGenerator} from './form-generator';
import {QuestionTypes} from '../../scripts/Enums/question-types';

export class FormViewer {
    get EmptyInnerHTML() {
        return '';
    }

    constructor() {
        this.formGenerator = new FormGenerator();
        this.errorMessageField = document.querySelector('.error-text');
        this.variantButton = document.querySelector('.btn-variant-box>button');
        this.answerButton = document.querySelector('.btn-answer-box>button');
        this.variantsFormGroup = document.querySelector('.variants');
        this.variantBox = document.querySelector('.variants>label>div');
        this.answerBox = document.querySelector('.answers>label>div');
    }

    clearErrorMessage() {
        this.errorMessageField.innerHTML = this.EmptyInnerHTML;
    }

    viewErrorMessage(message) {
        this.errorMessageField.innerHTML = this.formGenerator.generateErrorMessage(message);
    }

    viewVariantInputField() {
        let inputField = this.formGenerator.generateInputField('variant');
        this.variantBox.appendChild(inputField);
    }

    viewAnswerInputField() {
        let inputField = this.formGenerator.generateInputField('answer');
        this.answerBox.appendChild(inputField);
    }

    resetInputFields() {
        this.variantBox.innerHTML = this.formGenerator.generateDefaultInputGroup('variant');
        this.answerBox.innerHTML = this.formGenerator.generateDefaultInputGroup('answer');
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

    // todo: i must choose about declaring selectors in the constructor, or in methods instead
    fillForm(question) {
        let text = document.querySelector('.form-group>textarea');
        text.value = question.text;

        let inputVariants = document.querySelectorAll('.variant');
        let variantIndex = 0;
        if (question.variants !== null) {
            for (let inputVariant of inputVariants) {
                inputVariant.value = question.variants[variantIndex];
                variantIndex++;
            }
        }

        let answerVariants = document.querySelectorAll('.answer');
        let answerIndex = 0;
        for (let answerVariant of answerVariants) {
            answerVariant.value = question.answers[answerIndex];
            answerIndex++;
        }

        let selector = document.querySelector('.form-group>select');
        for (let i = 0; i < 3; i++) {
            if (selector.options[i].value === question.type) {
                selector.selectedIndex = i;
                break;
            }
        }
    }

    // todo: think about removing of code repetition
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

    _setDisplayFeatures(answerButton, variantButton, variantGroup) {
        this.errorMessageField.innerHTML = this.EmptyInnerHTML;
        this.answerButton.style.display = answerButton;
        this.variantButton.style.display = variantButton;
        this.variantsFormGroup.style.display = variantGroup;
    }
}