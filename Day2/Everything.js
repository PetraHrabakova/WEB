function every(array, test) {
    return array.every(test);
}

function every2(array, test) {
    for (let element of array)
        if (!test(element)) return false
    return true;
}

function every3(array, test) {
    return !array.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10))
console.log(every([2, 4, 16], n => n < 10))
console.log(every([], n => n < 10))

console.log(every2([1, 3, 5], n => n < 10))
console.log(every2([2, 4, 16], n => n < 10))
console.log(every2([], n => n < 10))

console.log(every3([1, 3, 5], n => n < 10))
console.log(every3([2, 4, 16], n => n < 10))
console.log(every3([], n => n < 10))