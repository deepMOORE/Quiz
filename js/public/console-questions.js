$.getJSON("../../json/question.json", function (json) {
    function runQuiz(questions) {
        return answersCount = questions.map(function (item) {
            var question = item.text;
            var answer = prompt(question);

            return questions.answer === answer;
        });
    }

    function countRightAnswers(answers) {
        return answers.filter(x => x == true).length;
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

    var questions = json;
    alert("Готовы к прохождению новейшего теста на iq?");

    answers = runQuiz(questions);
    rightAnswers = countRightAnswers(answers);
    showResultOfQuiz(rightAnswers);
});