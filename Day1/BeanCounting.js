function countChar(text, character) {
    let numberOfChar = 0
    for (let i = 0; i < text.length; i++)
        if (text[i] == character) numberOfChar++
    return numberOfChar
}

function countBs(text) {
    return countChar(text, "B")
}

console.log(countBs("BBC"))

console.log(countChar("kakkerlak", "k"))
