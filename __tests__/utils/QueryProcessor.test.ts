import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "amarmole"
          ));
    });

    test('should return name', () => {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "aaron"
          ));
    });

    test('largest number', () => {
        const query = "Which of the following numbers is the largest: 19, 53, 38?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "53"
          ));
    });

    test('add', () => {
        const query = "What is 28 plus 83?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "111"
          ));
    });

    test('multiply', () => {
        const query = "What is 94 multiplied by 10?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "940"
          ));
    });
});