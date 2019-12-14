import {QuestionTypes} from './Enums/question-types';

export class AnswerService {
    extractUserAnswers(form, questionType) {
        switch (questionType) {
            case QuestionTypes.CHECK:
                return this._extractCheckboxValue(form.elements['answer']);

            case QuestionTypes.RADIO:
                return this._extractRadioValues(form.elements['answer']);

            case QuestionTypes.TEXT:
                return this._extractTextValue(form.elements['answer']);
        }
    }

    _extractCheckboxValue(checkElements) {
        let result = [];

        try {
            for (let element of checkElements) {
                if (element.checked) {
                    result.push(element.dataset.value);
                }
            }
        } catch (e) {
            if (e instanceof TypeError) {
                result.push(checkElements.dataset.value);
            }
        }

        return result;
    }

    _extractRadioValues(checkElements) {
        try {
            for (let element of checkElements) {
                if (element.checked) {
                    return [element.dataset.value];
                }
            }
        } catch (e) {
            if (e instanceof TypeError) {
                if (checkElements.checked) {
                    return [checkElements.dataset.value];
                }
            }
        }

        return [null];
    }

    _extractTextValue(textarea) {
        return [textarea.value];
    }
}