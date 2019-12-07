import {QuestionsRepository} from '../../scripts/DBContext/questions-repository';
import {TableViewer} from './table-viewer';
import {toQuestionAdminModel} from '../../scripts/utils/toQuestionAdminModel';

const questionRepository = new QuestionsRepository();
const tableViewer = new TableViewer();

export function start() {
    questionRepository.getAll().then(
        (rawQuestions) => {
            let questions = rawQuestions.map(toQuestionAdminModel);

            tableViewer.view(questions);

            // todo: create confirm window
            let deleteButtons = document.querySelectorAll('tbody>tr>.edit-buttons>button.btn.btn-danger');
            let editButtons = document.querySelectorAll('tbody>tr>.edit-buttons>button.btn.btn-light');

            deleteButtons.forEach(function (x) {
                x.addEventListener('click', function (event) {
                    event.preventDefault();
                    questionRepository.removeById(x.dataset.id).then(
                        () => location.href = '../../views/private/admin-welcome.html'
                    );
                });
            });

            editButtons.forEach(function (x) {
                x.addEventListener('click', function (event) {
                    event.preventDefault();
                    location.href = '../../views/private/add-question.html?id=' + x.dataset.id;
                });
            });
        }
    );
}