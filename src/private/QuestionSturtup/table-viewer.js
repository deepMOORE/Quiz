import {TableGenerator} from './table-generator';

export class TableViewer {
    constructor() {
        this.tableGenerator = new TableGenerator();
        this.tBody = document.querySelector('.table>tbody');
    }

    view(questions) {
        let questionColumnHTML = '';
        let index = 1;

        for (let question of questions) {
            questionColumnHTML += this.tableGenerator.generateColumn(index, question);
            index++;
        }

        this.tBody.innerHTML = questionColumnHTML;
    }
}