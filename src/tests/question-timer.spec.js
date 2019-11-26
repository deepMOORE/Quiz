const QuestionTimer = require('../scripts/questions-timer');

describe('Timer Tests', () => {
    it('should set date correctly', () => {
        let timeForTestInMs = 10000;
        let timer = new QuestionTimer(timeForTestInMs);
        let dateNow = new Date();
        let timestampNow = dateNow.getDate() + timeForTestInMs;

        let difference = timestampNow - timer.endDate;
        expect(difference).toBeLessThan(2);
    });

    it('should check if time is over', () => {
        let timeForTestInMs = 100;
        let timer = new QuestionTimer(timeForTestInMs);

        setTimeout(function handle() {
            expect(timer.endDate).toBeFalsy(timer.isTimerEnabled());
        }, 110);
    });

    it('should check if time is not over', () => {
        let timeForTestInMs = 1000;
        let timer = new QuestionTimer(timeForTestInMs);

        expect(timer.endDate).toBeTruthy(timer.isTimerEnabled());
    });
});