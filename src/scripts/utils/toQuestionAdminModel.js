import {parseDateToFront} from './parseDateToFront';

export function toQuestionAdminModel(x) {
    return {
        id: x.id,
        text : x.text,
        type : x.type,
        createdAt: parseDateToFront(x.created_at)
    };
}