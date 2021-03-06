import {ValidateErrorMessage} from '../../scripts/Enums/validate-error-message';
import {QuestionTypes} from '../../scripts/Enums/question-types';

export class FormService {
    get EmptyInput() {
        return '';
    }

    get FirstInputAnswer() {
        return document.querySelector('.answer');
    }

    get FirstInputVariant() {
        return document.querySelector('.variant');
    }

    get InputAnswers() {
        return document.querySelectorAll('.answer');
    }

    get InputVariants() {
        return document.querySelectorAll('.variant');
    }

    get QuestionSelector() {
        return document.querySelector('.form-group>select');
    }

    get QuestionTextarea() {
        return document.querySelector('.form-group>textarea');
    }

    extractForm() {
        return {
            text : this._getText(),
            type : this._getQuestionType(),
            variants: this._getVariants(),
            answers: this._getAnswers(),
            created_at: new Date()
        };
    }

    validateForm() {
        let questionType = this._getQuestionType();

        switch (questionType) {
            case QuestionTypes.RADIO :
                return this._checkRadio();

            case QuestionTypes.CHECK :
                return this._checkCheck();

            case QuestionTypes.TEXT :
                return this._checkText();
        }
    }

    _checkRadio() {
        let commonErrorMessage = this._checkCommonForBoxSelectorConditions();
        if (this._checkCommonForBoxSelectorConditions() !== null) {
            return commonErrorMessage;
        }

        return null;
    }

    _checkCheck() {
        let commonErrorMessage = this._checkCommonForBoxSelectorConditions();
        if (this._checkCommonForBoxSelectorConditions() !== null) {
            return commonErrorMessage;
        }

        if (this._isInputFieldRepeated('answer')) {
            return ValidateErrorMessage.ANSWERS_REPETITION;
        }

        return null;
    }

    _checkText() {
        if (!this._isTextExist()) {
            return ValidateErrorMessage.EMPTY_TEXT_FIELD;
        }

        if (!this._isAtLeastOneAnswerExist()) {
            return ValidateErrorMessage.NO_ANSWERS;
        }

        return null;
    }

    _checkCommonForBoxSelectorConditions() {
        if (!this._isTextExist()) {
            return ValidateErrorMessage.EMPTY_TEXT_FIELD;
        }

        if (!this._isAtLeastOneAnswerExist()) {
            return ValidateErrorMessage.NO_ANSWERS;
        }

        if (!this._isAtLeastOneVariantExist()) {
            return ValidateErrorMessage.NO_VARIANTS;
        }

        if (!this._isVariantsContainAnswers()) {
            return ValidateErrorMessage.QUESTION_WITHOUT_ANSWER;
        }

        if (this._isInputFieldRepeated('variant')) {
            return ValidateErrorMessage.VARIANTS_REPETITION;
        }

        return null;
    }

    _isTextExist() {
        return this._getText() !== this.EmptyInput;
    }

    _isAtLeastOneAnswerExist() {
        return this.FirstInputAnswer.value !== this.EmptyInput;
    }

    _isAtLeastOneVariantExist() {
        return this.FirstInputVariant.value !== this.EmptyInput;
    }

    _isVariantsContainAnswers() {
        let answers = this.InputAnswers;
        let variants = this.InputVariants;

        for (let answer of answers) {
            let isVariantsContainCurrentAnswer = false;
            for (let variant of variants) {
                if (answer.value === variant.value) {
                    isVariantsContainCurrentAnswer =  true;
                }
            }

            if (!isVariantsContainCurrentAnswer) {
                return false;
            }
        }

        return true;
    }


    _isInputFieldRepeated(inputClassName) {
        let input = document.querySelectorAll(`.${inputClassName}`);

        let answerTexts = [];
        input.forEach(function (x) {
            answerTexts.push(x.value);
        });

        return this._isArrayHasDuplicateValues(answerTexts);
    }

    _isArrayHasDuplicateValues(array) {
        let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index);

        return findDuplicates(array).length > 0;
    }

    _getText() {
        return this.QuestionTextarea.value;
    }

    _getQuestionType() {
        return this.QuestionSelector.options[this.QuestionSelector.selectedIndex].value;
    }

    _getVariants() {
        let result = [];

        let variants = this.InputVariants;
        for (let variant of variants) {
            let value = variant.value;
            result.push(value);
        }

        if (result.length === 1 && result[0] === '') {
            return null;
        }

        return result;
    }

    _getAnswers() {
        let result = [];

        let answers = this.InputAnswers;
        for (let answer of answers) {
            let value = answer.value;
            result.push(value);
        }

        return result;
    }
}