import capitalize from "../script/capitalize";

test("Capitalizes the first letter of the word", () => {
    expect(capitalize("hello")).toBe("Hello");
})

test("Capitalizes number?", () => {
    expect(capitalize("1hello")).toBe("1hello");
})

test("Capitalizes special Characters?", () => {
    expect(capitalize("&hello")).toBe("&hello");
})

test("Capitalizes empty", () => {
    const result = capitalize("");
    expect(result).toBeInstanceOf(Error);
    expect(result.message).toBe("No string provided.");
})