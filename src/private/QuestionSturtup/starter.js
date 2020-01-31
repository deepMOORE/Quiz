import {QuestionsRepository} from '../../scripts/DBContext/questions-repository';
import {TableViewer} from './table-viewer';
import {toQuestionAdminModel} from '../../scripts/utils/toQuestionAdminModel';

const questionRepository = new QuestionsRepository();
const tableViewer = new TableViewer();
let logoutButton = document.querySelector('nav>.btn-danger');

export function start() {
    questionRepository.getAll().then(
        (rawQuestions) => {
            let questions = rawQuestions.map(toQuestionAdminModel);

            tableViewer.view(questions);

            let editButtons = document.querySelectorAll('tbody>tr>.edit-buttons>button.btn.btn-light');

            editButtons.forEach(function (x) {
                x.addEventListener('click', function (event) {
                    event.preventDefault();
                    location.href = '../../views/private/add-question.html?id=' + x.dataset.id;
                });
            });

            $('.confirm-delete').click(function () {
                let id = $('.append-deletion').data('id');

                questionRepository.removeById(id).then(
                    () => location.href = '../../views/private/admin-welcome.html'
                );
            });

            $('.deletion').on('click', function(event) {
                event.preventDefault();

                let id = $(this).data('id');
                $('.append-deletion').data('id', id).modal('show');
            });

            logoutButton.addEventListener('click', function(event) {
                event.preventDefault();

                location.href = '../../../index.html';
            });
        }
    );
}