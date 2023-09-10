// reduce() - reduces array into a single value

// LONG VERSION
// Step 1: Define an array of arrays 
let arrays = [[1, 2, 3], [4, 5], [6]];

// Step 2: Use the reduce method to flatten the array
let flattenedArray = arrays.reduce(function (accumulator, currentArray) {
    // Step 3: Initialize an empty array to store the flattened result 
    // (accumulator is initially an empty array on the first iteration)
    // This array will accumulate all the elements from the inner arrays

    // Step 4: Use a loop to iterate through the current inner array
    for (let element of currentArray) {
        // Step 5: Add each element from the current inner array to the accumulator array
        accumulator.push(element);
    }

    // Step 6: Return the accumulator for the next iteration 
    // The accumulator will now contain all elements from the processed inner array
    return accumulator;

}, []); // Step 7: Provide an empty array as the initial value for the accumulator

console.log(flattenedArray);


// SHORT VERSION
console.log(arrays.reduce((flat, current) => [...flat, ...current]))
