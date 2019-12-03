import {QuestionTypes} from './Enums/question-types';

export class AnswerGenerator {
    generate(question) {
        switch (question.type) {
            case QuestionTypes.RADIO :
                return this._generateRadio(question);

            case QuestionTypes.CHECK :
                return this._generateCheck(question);

            case QuestionTypes.TEXT :
                return this._generateText(question);
        }
    }

    _generateRadio(question) {
        let controlHTML = '';
        let variants = question.variants;

        variants.forEach((item) => {
            let checkedAttribute = '';
            if (question.userAnswers.includes(item)) {
                checkedAttribute = 'checked';
            }

            controlHTML += `
        <div class="answer">
            <label class="input-label option">
                 <input class="radio-input" name="answer" data-value="${item}" type="radio" ${checkedAttribute}>
                 <span class="radio-box"></span>
                 ${item}
            </label>
        </div>`;
        });

        return controlHTML;
    }

    // todo: styles for checkbox overrides form login page, it's so bad
    _generateCheck(question) {
        let controlHTML = '';
        let variants = question.variants;

        variants.forEach((item) => {
            let checkedAttribute = '';
            if (question.userAnswers.includes(item)) {
                checkedAttribute = 'checked';
            }

            controlHTML += `
        <div class="answer">
          <label class="input-label option">
            <input class="check-input" name="answer" data-value="${item}" type="checkbox" ${checkedAttribute}>
            <span class="check-box"></span>
            ${item}
          </label>
        </div>`;
        });

        return controlHTML;
    }

    _generateText(question) {
        let textAreaValue = '';
        if (question.userAnswers.length > 0) {
            textAreaValue = question.userAnswers[0];
        }

        return `
        <div class="question-box">
        <label class="input-label option">
        <textarea class="input-area" name="answer" id="answer">${textAreaValue}</textarea>
        </label>
        </div>`;
    }
}