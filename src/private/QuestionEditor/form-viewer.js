import {FormGenerator} from "./form-generator";
import {QuestionTypes} from "../../scripts/Enums/question-types";
import {ButtonTypes} from "../../scripts/Enums/button-types";

export class FormViewer {
    constructor() {
        this.formGenerator = new FormGenerator();
        this.variantBoxButton = document.querySelector('.btn-variant-box');
        this.answerBoxButton = document.querySelector('.btn-answer-box');
        this.variantInput = document.querySelector('.variants');
    }

    view(viewType) {
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
    _viewRadio() {
        if (this.answerBoxButton.innerHTML !== '') {
            this.answerBoxButton.innerHTML = '';
        }

        if (this.variantBoxButton.innerHTML === '') {
            this.variantBoxButton.innerHTML = this.formGenerator.generateButton(ButtonTypes.VARIANT);
        }

        if (this.variantInput.innerHTML === '') {
            this.variantInput.innerHTML = this.formGenerator.generateVariantLabels();
        }
    }

    _viewCheck() {
        if (this.answerBoxButton.innerHTML === '') {
            this.answerBoxButton.innerHTML = this.formGenerator.generateButton(ButtonTypes.ANSWER);
        }

        if (this.variantBoxButton.innerHTML === '') {
            this.variantBoxButton.innerHTML = this.formGenerator.generateButton(ButtonTypes.VARIANT);
        }

        if (this.variantInput.innerHTML === '') {
            this.variantInput.innerHTML = this.formGenerator.generateVariantLabels();
        }
    }

    _viewText() {
        if (this.answerBoxButton.innerHTML !== '') {
            this.answerBoxButton.innerHTML = '';
        }

        if (this.variantBoxButton.innerHTML !== '') {
            this.variantBoxButton.innerHTML = '';
        }

        if (this.variantInput.innerHTML !== '') {
            this.variantInput.innerHTML = '';
        }
    }
}