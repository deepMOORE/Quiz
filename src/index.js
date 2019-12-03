import {app} from './scripts/app';
import {privateApp} from './private/question-editor';

const body = document.body;

switch (body.className) {
    case 'public-question':
        const publicQuestion = app();
        break;
    case 'admin-startup':
        break;
    case 'add-question':
        const addQuestion = privateApp();
        break;
}
