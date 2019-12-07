export class FormService {
    constructor() {
        this.questionText = document.querySelector('.form-group>textarea');
        this.questionType = document.querySelector('.form-group>select');
        // this.variants = document.querySelectorAll('.variant');
        // this.answers = document.querySelectorAll('.answer');
    }

    extractForm() {
        return {
            text : this._getText(),
            type : this._getType(),
            variants: this._getVariants(),
            answers: this._getAnswers(),
            created_at: new Date()
        };
    }

    _getText() {
        return this.questionText.value;
    }

    _getType() {
        // https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
        return this.questionType.options[this.questionType.selectedIndex].value;
    }

    _getVariants() {
        let result = [];

        let variants = document.querySelectorAll('.variant');
        for (let variant of variants) {
            let value = variant.value;
            result.push(value);
        }

        return result;
    }

    _getAnswers() {
        let result = [];

        let answers = document.querySelectorAll('.answer');
        for (let answer of answers) {
            let value = answer.value;
            result.push(value);
        }

        return result;
    }
}