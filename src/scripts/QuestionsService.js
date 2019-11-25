const readline = require('readline');

class QuestionsService {
    hasNext(questions) {
        return questions.length > 0;
    }

    askNext() {
        const readline = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('What do you think of Node.js? ', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);

            readline.close();
        });
    }

    countRightAnswers(answers) {
        return answers.filter(x => x === true).length;
    }
}

module.exports = QuestionsService;