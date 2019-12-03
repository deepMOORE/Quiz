import {QuestionsRepository} from '../scripts/Repositories/questions-repository';

let questions = [
    {
        id : "1",
        text: "text1",
        answer: "answer1",
        type : "text"
    },
    {
        id : "2",
        text: "text2",
        answer: "answer2",
        type : "radio"
    },
    {
        id : "3",
        text: "text3",
        answer: "answer3",
        type : "text"
    },
    {
        id : "4",
        text: "text4",
        answer: "answer4",
    }
];

describe('Question Repository  Tests', () => {
    it('should create repository correctly', () => {
        let questionsRepository = new QuestionsRepository(questions);

        expect(questionsRepository.getQuestionsCount()).toBe(4);
        expect(questionsRepository).toBeDefined();
    });

    it('should count questions', () => {
        let questionsRepository = new QuestionsRepository(questions);

        expect(questionsRepository.getQuestionsCount()).toBe(4);
    });

    it('should not count questions', () => {
        let questionsRepository = new QuestionsRepository([]);

        expect(questionsRepository.getQuestionsCount()).toBe(0);
    });
});