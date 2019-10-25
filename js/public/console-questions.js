$.getJSON("../../json/question.json", function (serilizedJson) {
    let startDate = new Date();
    let timeForTestInMs = 15000;
    let endDate = startDate.getTime() + timeForTestInMs;

    function isTimerEnabled() {
        let now = new Date();
        return now <= endDate;
    }

    function hasNextQuestion(questions) {
        return questions.length > 0;
    }

    function askNextQuestion(text) {
        return prompt(text);
    }

    function countRightAnswers(answers) {
        return answers.filter(x => x == true).length;
    }

    function mapToQuestionAnswer(questions) {
        return questions.map((x) => {
            return {
                text : x.text,
                answer: x.answer
            };
        })
    }

    function showResultOfQuiz(rightAnswers, totalAnswers) {
        let message = 'Вы ответили на ' + rightAnswers + '/' + totalAnswers + ' вопросов.\n';
        switch (rightAnswers) {
            case 10:
            case 9:
                message += 'Ваш IQ > 200. Вы гений! Зачем вам тогда JS?';
                alert(message);
                break;

            case 8:
            case 7:
                message += 'Ваш Iq около 180. Почти как у Перельмана!';
                alert(message);
                break;

            case 6:
            case 5:
            case 4:
                message += 'Ваш Iq около 100. Пойдет, выше среднего.';
                alert(message);
                break;
            case 3:
            case 2:
            case 1:
            case 0:
                message += 'Ваш Iq < 30. Как и у создателя теста!';
                alert(message);
                break;
        };
    }

    let questions = mapToQuestionAnswer(serilizedJson);
    alert("Готовы к прохождению этого инновационного, точного и сложнейшего теста на iq? Думайте быстро, у вас 15 секунд!");

    let answers = [];
    while (hasNextQuestion(questions) && isTimerEnabled()) {
        let currentAnswer = askNextQuestion(questions[0].text);
        let rightAnswer = questions[0].answer;
        answers.push(currentAnswer == rightAnswer);
        questions.splice(0, 1);
    }

    let rightAnswersCount = countRightAnswers(answers);
    showResultOfQuiz(rightAnswersCount, answers.length);
});