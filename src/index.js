import {app} from './scripts/app';
import {edit} from './private/QuestionEditor/editor';
import {start} from './private/QuestionSturtup/starter';

const body = document.body;
// todo: try to refactor for creating views and generators directories, in that case me should refactor app()
switch (body.className) {
    case 'public-question':
        const publicQuestion = app();
        break;
    case 'admin-startup':
        const showQuestions = start();
        break;
    case 'add-question':
        const addQuestion = edit();
        break;
}
