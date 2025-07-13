import ceasarCipher from "../script/ceasarCipher";

test("The string 'Ananth' with key as 3", () => {
    expect(ceasarCipher("Ananth", 3)).toBe("Dqdqwk");
});

test("The string 'Ananth123' with key as 3", () => {
    expect(ceasarCipher("Ananth123", 3)).toBe("Dqdqwk123");
});

test("The string 'HeLLo' with key as 3", () => {
    expect(ceasarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("The string 'Hello, World!' with key as 3", () => {
    expect(ceasarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});