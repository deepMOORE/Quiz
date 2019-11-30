export class AnswerViewer {
    constructor() {
        this.questionWrapper = document.querySelector('.question-box');
    }

    view(answersHTML) {
        let controlEl = document.createElement('div');
        controlEl.innerHTML = answersHTML;

        this.questionWrapper.append(controlEl);
    }

    clear() {
        this.questionWrapper.innerHTML = '';
    }
}