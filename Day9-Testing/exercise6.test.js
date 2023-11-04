function caesarCipher(word, shift) {
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
        let code = word.charCodeAt(i)
        let shiftedCode = 0;

        if (word.charAt(i) === " ")
            newWord += " ";

        else if (word.charAt(i).toLowerCase() === word.charAt(i)) {
            shiftedCode = ((code - 97 + shift) % 26 + 26) % 26 + 97;
            newWord += String.fromCharCode(shiftedCode);
        }

        else if (word.charAt(i).toUpperCase() === word.charAt(i)) {
            shiftedCode = ((code - 65 + shift) % 26 + 26) % 26 + 65;
            newWord += String.fromCharCode(shiftedCode);
        }
    }
    return newWord;
}

it("Returns ciphered 'abc' with 1 -> 'bcd'", () => {
    const word = caesarCipher("abc", 1);
    expect(word).toBe("bcd");
})

it("Returns ciphered 'defend the east wall of the castle' with shift 1", () => {
    const word = caesarCipher("defend the east wall of the castle", 1);
    expect(word).toBe("efgfoe uif fbtu xbmm pg uif dbtumf");
})