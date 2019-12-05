import {parseDateToFront} from './parseDateToFront';

export function toQuestionAdminModel(x) {
    return {
        text : x.text,
        type : x.type,
        createdAt: parseDateToFront(x.created_at)
    };
}