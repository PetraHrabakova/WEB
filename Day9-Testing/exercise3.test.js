function reverseString(word) {
    let newWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        newWord += word.charAt(i);
    }

    return newWord;
}

it("Reverses a string", () => {
    const word = reverseString("hello");
    expect(word).toBe("olleh");
})