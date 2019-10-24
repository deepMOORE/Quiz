var startDate = new Date();
var timeForTestInMs = 15000;
var endDate = startDate.getTime() + timeForTestInMs;

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
    return questions.map(function(x) {
        return {
            "text" : x.text,
            "answer" : x.answer
        };
    })
}

function showResultOfQuiz(rightAnswers) {
    switch (rightAnswers) {
        case 10:
        case 9:
            alert('Ваш IQ > 200. Вы гений!');
            break;

        case 8:
        case 7:
            alert('Ваш Iq около 180. Почти как у Перельмана!');
            break;

        case 6:
        case 5:
        case 4:
            alert('Ваш Iq около 100. Пойдет, выше среднего.');
            break;
        case 3:
        case 2:
        case 1:
        case 0:
            alert('Ваш Iq 30. Как и у создателя теста!');
            break;
    };
}

function isTimerEnabled() {
    var now = new Date();
    return now <= endDate;
}


$.getJSON("../../json/question.json", function (serilizedJson) {
    var questions = mapToQuestionAnswer(serilizedJson);
    alert("Готовы к прохождению новейшего теста на iq? Думайте быстро, у вас 15 секунд!");

    var answers = [];
    while (hasNextQuestion(questions) && isTimerEnabled()) {
        var currentAnswer = askNextQuestion(questions[0]["text"]);
        var rightAnswer = questions[0]["answer"];
        answers.push(currentAnswer == rightAnswer);
        questions.splice(0, 1);
    }

    var rightAnswersCount = countRightAnswers(answers);
    showResultOfQuiz(rightAnswersCount);
});