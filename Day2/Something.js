function checkPositive(array) {
    return array.some(e => e > 0);
}

console.log(checkPositive([1, 2, 3, -4, 5]))