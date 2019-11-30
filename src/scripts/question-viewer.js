export class QuestionViewer {
    constructor() {
        this.questionInfo = document.querySelector('.question-info');
        this.questionText = document.querySelector('.question-text');
    }

    viewHeader(previewHTML, questionTextHTML) {
        this.questionInfo.innerHTML = previewHTML;
        this.questionText.innerHTML = questionTextHTML;
    }

    clearHeader() {
        this.questionInfo.innerHTML = '';
        this.questionText.innerHTML = '';
    }
}