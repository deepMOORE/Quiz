import {QuestionTypes} from './question-types';

export class AnswerGenerator {
    generate(answers, questionType) {
        switch (questionType) {
            case QuestionTypes.RADIO : return this.generateRadio(answers);

            case QuestionTypes.CHECK : return this.generateCheck(answers);

            case QuestionTypes.TEXT : return null;
        }
    }

    generateRadio(variants) {
        let controlHTML = '';
        variants.forEach((item) => {
            controlHTML += `
        <div class="form-control-radio">
            <label class="check option">
                 <input class="radio-input" name="answer" type="radio">
                 <span class="radio-box"></span>
                 ${item}
            </label>
        </div>`
        });

        return controlHTML;
    }

    generateText() {

    }

    generateCheck() {

    }
}