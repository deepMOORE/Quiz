// todo: this repository using also in admin panel, it's so bad
export class QuestionsRepository {
    get apiUrl() {
        return 'http://localhost:3004/';
    }

    get questions() {
        return 'questions/';
    }

    getAll() {
        return fetch(`${this.apiUrl}${this.questions}`)
            .then((response) => response.json());
    }

    getQuestionById(id) {
        return fetch(`${this.apiUrl}${this.questions}${id}`)
            .then((response) => response.json());
    }

    add(question) {
        return fetch(`${this.apiUrl}${this.questions}`, {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }

    removeById(id) {
        return fetch(`${this.apiUrl}${this.questions}${id}`, {
            method: 'DELETE'
        });
    }
}
