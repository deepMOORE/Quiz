import {QuestionsRepository} from '../../scripts/Repositories/questions-repository';
import {TableViewer} from './table-viewer';
import {toQuestionAdminModel} from '../../scripts/utils/toQuestionAdminModel';

const questionRepository = new QuestionsRepository();
const tableViewer = new TableViewer();

export function start() {
    questionRepository.getQuestions().then(
        (rawQuestions) => {
            let questions = rawQuestions.map(toQuestionAdminModel);

            tableViewer.view(questions);
        }
    );
}