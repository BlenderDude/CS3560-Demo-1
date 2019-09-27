const { doubleCharacters } = require("./functions");

test("doubleCharacters doubles each character in a string", () => {
    expect(doubleCharacters("hello")).toBe("hheelllloo");
    expect(doubleCharacters("test")).toBe("tteesstt");
    expect(doubleCharacters("1234")).toBe("11223344");
});

test("doubleCharacters fails when passed an incorrect type", () => {
    expect(() => doubleCharacters(1)).toThrow(TypeError);
    expect(() => doubleCharacters([])).toThrow(TypeError);
    expect(() => doubleCharacters({})).toThrow(TypeError);
});
