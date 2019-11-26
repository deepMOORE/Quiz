class QuestionsTimer {
    constructor(timeForTestInMs) {
        let startDate = new Date();
        this.endDate = startDate.getDate() + timeForTestInMs;
    }

    isTimerEnabled() {
        let now = new Date();
        return now <= this.endDate;
    }
}

module.exports = QuestionsTimer;