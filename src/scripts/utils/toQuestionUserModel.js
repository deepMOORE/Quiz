function toQuestionUserModel(x) {
    return {
        text : x.text,
        answer : x.answer,
        type : x.type,
        variants: [
            ...x.variants
        ]
    };
}

module.exports = {
    toQuestionUserModel
};