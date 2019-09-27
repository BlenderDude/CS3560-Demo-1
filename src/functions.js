function doubleCharacters(input) {
    if (typeof input !== "string") {
        throw new TypeError("Only strings can have their characters doubled");
    }

    const output = input
        .split("")
        .map(character => character + +character)
        .join("");

    return output;
}

module.exports = {
    doubleCharacters
};
