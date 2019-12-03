import {QuestionTypes} from "./Enums/question-types";

export class AnswerService {
    extractUserAnswers(form, questionType) {
        switch (questionType) {
            case QuestionTypes.CHECK:
                return this._extractCheckboxValue(form.elements["answer"]);

            case QuestionTypes.RADIO:
                return this._extractRadioValues(form.elements["answer"]);

            case QuestionTypes.TEXT:
                return this._extractTextValue(form.elements["answer"]);
        }
    }

    _extractCheckboxValue(checkElements) {
        let result = [];

        for (let element of checkElements) {
            if (element.checked) {
                result.push(element.dataset.value);
            }
        }

        return result;
    }

    _extractRadioValues(checkElements) {
        for (let element of checkElements) {
            if (element.checked) {
                return [element.dataset.value];
            }
        }

        return [null];
    }

    _extractTextValue(textarea) {
        return [textarea.value];
    }
}