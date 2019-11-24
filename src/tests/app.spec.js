const countRightAnswers = require('../scripts/app/consoleQuiz/app');
const isTimerEnabled = require('../scripts/app/consoleQuiz/app');
const hasNextQuestion = require('../scripts/app/consoleQuiz/app');


describe('Console quiz tests.', function () {
    it('shouldCountRightQuestionsNumber', function () {
        let testResult = [true, true, false, false, true, true];
        let rightAnswers = countRightAnswers(testResult);

        expect(rightAnswers).toBe(4);
    });

    it('shouldNotCountRightQuestionsNumber', function () {
        let testResult = [false, false, false, false, false, false];
        let rightAnswers = countRightAnswers(testResult);

        expect(rightAnswers).toBe(0);
    });

    it('shouldTimerBeEnable', function () {
        let startDate = new Date();
        let timeForTestInMs = 15000;
        let endDate = startDate.getTime() + timeForTestInMs;
        let isTimerEnable = isTimerEnabled(endDate);

        expect(isTimerEnable).toBeTruthy();
    });

    it('shouldHasNextQuestion', function () {
        let questions = [ 
            { text: 'text', answer: 'answer' },
            { text: 'text', answer: 'answer' }
        ];

        expect(hasNextQuestion(questions)).toBeTruthy();
    });

    it('shouldNotHasNextQuestion', function () {
        let questions = [];

        expect(hasNextQuestion(questions)).toBeFalsy();
    });

    it('shouldReturnMappedModels', function () {
        let questions = [];

        expect(hasNextQuestion(questions)).toBeFalsy();
    });
});