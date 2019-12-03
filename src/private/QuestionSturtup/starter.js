import {QuestionsRepository} from "../../scripts/Repositories/questions-repository";
import {TableViewer} from "./table-viewer";

const questionRepository = new QuestionsRepository();
const tableViewer = new TableViewer();

export function start() {
    let questions = questionRepository.getQuestionAdminModels();

    tableViewer.view(questions);
}