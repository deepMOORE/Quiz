const QuestionService = require('../scripts/questions-service');

describe('Service Tests', () => {
    let questionService = new QuestionService();

    it('should has next question', () => {
        let questions = [
            {
                text: "text",
                answer: "answer"
            },
            {
                text: "text",
                answer: "answer"
            }
        ];

        expect(questionService.hasNext(questions)).toBeTrue();
    });

    it('should not has next question', () => {
        let questions = [ ];

        expect(questionService.hasNext(questions)).toBeFalse();
    });

    it('should count right answers', () => {
        let answers = [ true, true, false, false, true ];

        expect(questionService.countRightAnswers(answers)).toBe(3);
    });

    it('should not count right answers', () => {
        let answers = [ false, false, false, false,];

        expect(questionService.countRightAnswers(answers)).toBe(0);
    });
});