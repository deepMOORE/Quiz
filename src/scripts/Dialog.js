class Dialog {
    startupMessage(){
        console.info('Готовы к прохождению этого инновационного, точного и сложнейшего теста на iq? Думайте быстро, у вас 15 секунд!');
    }

    resultOfQuizMessage(rightAnswers, totalAnswers) {
        let message = 'Вы ответили на ' + rightAnswers + '/' + totalAnswers + ' вопросов.\n';
        switch (rightAnswers) {
            case 10:
            case 9:
                message += 'Ваш IQ > 200. Вы гений! Зачем вам тогда JS?';
                alert(message);
                break;

            case 8:
            case 7:
                message += 'Ваш IQ около 180. Почти как у Перельмана!';
                alert(message);
                break;

            case 6:
            case 5:
            case 4:
                message += 'Ваш IQ около 100. Пойдет, выше среднего.';
                alert(message);
                break;
            case 3:
            case 2:
            case 1:
            case 0:
                message += 'Ваш IQ < 30. Как и у создателя теста!';
                console.info(message);
                break;
        }
    }

    askQuestionMessage(message) {
        console.info(message);
    }
}

module.exports = Dialog;
