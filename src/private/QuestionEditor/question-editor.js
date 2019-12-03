import {FormViewer} from "./form-viewer";
import {QuestionTypes} from "../../scripts/Enums/question-types";

let questionSelector = document.querySelector('select.form-control');

const formViewer = new FormViewer();

export function privateApp() {
    formViewer.view(QuestionTypes.RADIO);

    questionSelector.addEventListener('change', function() {
        formViewer.view(questionSelector.value);
    });
}
