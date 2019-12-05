import {app} from './scripts/app';
import {edit} from './private/QuestionEditor/editor';
import {start} from './private/QuestionSturtup/starter';

const body = document.body;
// todo: try to refactor for creating views and generators directories, in that case me should refactor app()
// todo: try to change innerHTML methods to appendChild if int the places where it possible
// todo: MAKE DISPLAY : NONE
switch (body.className) {
    case 'public-question':
        app();
        break;
    case 'admin-startup':
        start();
        break;
    case 'add-question':
        edit();
        break;
}
