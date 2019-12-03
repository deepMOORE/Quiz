export function toQuestionAdminModel(x) {
    return {
        text : x.text,
        type : x.type,
        createdAt: parseCreatedAt(x.created_at)
    };
}

function parseCreatedAt(createdAt) {
    let date = new Date(createdAt);

    let year = date.getFullYear();
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();

    return day + '/' + month + '/' + year;
}