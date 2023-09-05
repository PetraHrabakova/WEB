function reverseArray(array) {   // Create a new array with reversed values
    let newArray = []
    for (let i = array.length-1; i >= 0; i--) {
        newArray.push(array[i])
    }
    return newArray
}

function reverseArrayInPlace(array) {    // Modify the provided array and return it
    for (let i = 0; i <= Math.floor((array.length-1)/2); i++) {
        let tempNumber = array[array.length-1-i]
        array[array.length-1-i] = array[i]
        array[i] = tempNumber
    }
    return array
}


console.log(reverseArray(["A", "B", "C"]))

let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)