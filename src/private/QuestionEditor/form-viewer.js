import {FormGenerator} from './form-generator';
import {QuestionTypes} from '../../scripts/Enums/question-types';

export class FormViewer {
    constructor() {
        this.formGenerator = new FormGenerator();

        this.variantButton = document.querySelector('.btn-variant-box>button');
        this.answerButton = document.querySelector('.btn-answer-box>button');
        this.variantsFormGroup = document.querySelector('.variants');
        this.variantBox = document.querySelector('.variants>label>div');
        this.answerBox = document.querySelector('.answers>label>div');
    }

    viewVariantInputField() {
        let inputField = this.formGenerator.generateInputField();
        this.variantBox.appendChild(inputField);
    }

    viewAnswerInputField() {
        let inputField = this.formGenerator.generateInputField();
        this.answerBox.appendChild(inputField);
    }

    resetInputFields() {
        this.variantBox.innerHTML = this.formGenerator.generateDefaultInputGroup();
        this.answerBox.innerHTML = this.formGenerator.generateDefaultInputGroup();
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
        this._setDisplayFeatures('none', 'none', 'none')
    }

    _setDisplayFeatures(answerButton, variantButton, variantGroup) {
        this.answerButton.style.display = answerButton;
        this.variantButton.style.display = variantButton;
        this.variantsFormGroup.style.display = variantGroup;
    }
}