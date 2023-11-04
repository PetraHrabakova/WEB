function capitalize(word) {
    const newWord = word.charAt(0).toUpperCase() + word.slice(1);
    return newWord;
}

it("Returns hello with upper case as first letter", () => {
    const word = capitalize("hello");
    expect(word).toBe("Hello");
})
