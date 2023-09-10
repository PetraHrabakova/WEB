function squareList(array) {
    // filter() - filters out the elements which do not pass the test from the provided function
    const newArray = array.filter(x => x > 0 && x % 1 === 0)
    // map() - applies a function to all elemements of an array and build a new array from the returned values
    newArray.map(x => x * x)
    return newArray
}

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2])
console.log(squaredIntegers)