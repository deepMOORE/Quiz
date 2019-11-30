import {QuestionTypes} from './question-types';

export class AnswerGenerator {
    generate(answers, questionType) {
        switch (questionType) {
            case QuestionTypes.RADIO :
                return this.generateRadio(answers);

            case QuestionTypes.CHECK :
                return this.generateCheck(answers);

            case QuestionTypes.TEXT :
                return this.generateText();
        }
    }

    generateRadio(variants) {
        let controlHTML = '';
        variants.forEach((item) => {
            controlHTML += `
        <div class="answer">
            <label class="input-label option">
                 <input class="radio-input" name="answer" type="radio">
                 <span class="radio-box"></span>
                 ${item}
            </label>
        </div>`;
        });

        return controlHTML;
    }

    // todo: styles for checkbox brings form login page, it's so bad
    generateCheck(variants) {
        let controlHTML = '';
        variants.forEach((item) => {
            controlHTML += `
        <div class="answer">
          <label class="input-label option">
            <input class="check-input" name="answer" type="checkbox">
            <span class="check-box"></span>
            ${item}
          </label>
        </div>`;
        });

        return controlHTML;
    }

    generateText() {
        return `
        <div class="question-box">
        <label class="input-label option">
        <textarea class="input-area" name="answer" id="answer" cols="100" rows="10"></textarea>
        </label>
        </div>`;
    }
}