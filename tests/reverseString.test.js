import reverseString from "../script/reverseString";

test("The string is reversed", () => {
    expect(reverseString("Hello")).toBe("olleH");
});

test("The string is empty", () => {
    expect(reverseString("")).toBe("");
});

test("The string is numbers", () => {
    expect(reverseString("1234")).toBe("4321");
});