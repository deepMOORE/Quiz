export class QuestionGenerator {
    generatePreview(number) {
        return `<span>Question #${number}</span>`;
    }

    generateQuestionText(text) {
        return `<span>${text}</span>`;
    }
}