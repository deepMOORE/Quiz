export function parseDateToFront(createdAt) {
    let date = new Date(createdAt);

    let year = date.getFullYear();
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();

    return day + '/' + month + '/' + year;
}