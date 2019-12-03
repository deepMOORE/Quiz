import {app} from './scripts/app';
import {edit} from './private/QuestionEditor/editor';

const body = document.body;

switch (body.className) {
    case 'public-question':
        const publicQuestion = app();
        break;
    case 'admin-startup':
        break;
    case 'add-question':
        const addQuestion = edit();
        break;
}
