import analyzeArray from "../script/analyzeArray";

test("Array: [1,8,3,4,2,6]", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
});

test("Array: []", () => {
    expect(analyzeArray([])).toEqual({average: NaN, min: undefined, max: undefined, length: 0})
});

test("Array: [1, 2, 3, Apple]", () => {
    expect(analyzeArray([1, 2, 3, 'Apple'])).toEqual({average: 1.5, min: 1, max: 3, length: 4})
});