const numbers = [1, 5, 2, 3, 4]

numbers.sort((a, b) => a - b)

console.log(numbers)


function alphabeticalOrder(array) {
    // The .sort() is provided with a comparison function as an argument
    // (Normally, it will sort it by default, but here it'll use the function provided)
    return [...array].sort((a, b) =>
        (a === b ? 0 : a < b ? -1 : 1))
    // If a === b, the function returns 0
    // If a < b, the function returns -1
    // If a > b, the function returns 1
}

const letters = ["a", "d", "c", "a", "z", "g"]

console.log(alphabeticalOrder(letters))

console.log(letters)
