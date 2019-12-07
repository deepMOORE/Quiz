// todo: this repository using also in admin panel, it's so bad
export class QuestionsRepository {
    get apiUrl() {
        return 'http://localhost:3004/';
    }

    getQuestions() {
        return fetch(`${this.apiUrl}questions`)
            .then((response) => response.json());
    }

    addQuestion(body) {
        return fetch(`${this.apiUrl}questions`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }
}
