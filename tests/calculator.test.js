import calculator from "../script/calculator";

test("Addition", () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(1000000, 2)).toBe(1000002);
    expect(() => calculator.add("A", 2)).toThrow("Please provide numbers");
});

test("Subtraction", () => {
    expect(calculator.sub(1, 2)).toBe(-1);
    expect(calculator.sub(1000000, 2)).toBe(999998);
    expect(() => calculator.sub("A", 2)).toThrow("Please provide numbers");
});

test("Multiplication", () => {
    expect(calculator.mul(1, 2)).toBe(2);
    expect(calculator.mul(1000000, 2)).toBe(2000000);
    expect(() => calculator.mul("A", 2)).toThrow("Please provide numbers");
});

test("Division", () => {
    expect(calculator.div(1, 2)).toBe(0.5);
    expect(calculator.div(1000000, 2)).toBe(500000);
    expect(() => calculator.div("A", 2)).toThrow("Please provide numbers");
});