function toQuestionUserModel(x) {
    return {
        text : x.text,
        answer : x.answer,
        type : x.type,
        userAnswers: [],
        variants: (x.variants === null)? null : [...x.variants]
    };
}

module.exports = {
    toQuestionUserModel
};