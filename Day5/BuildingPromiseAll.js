function Promise_all(promises) {
    return new Promise((resolve, reject) => {
        let results = []
        let pending = promises.length

        for (let i = 0; i < pending; i++) {
            // For each of the functions passed in the "promises"
            // if it passes, we need to store its result to the correct
            // position in an array and then recrement the size of the promises array
            promises[i].then(result => {
                results[i] = result
                pending--
                // If it was the last promise, resolve it
                if (pending == 0) resolve(results)
            })
                // In case the promise throws an error 
                .catch(reject)
        }
        // If the promises array is empty from the start,
        // Don't do any resolving
        if (promises.length == 0) resolve(results)
    })
}

// Test code.
Promise_all([]).then(array => {
    console.log("This should be []:", array)
})
function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 500)
    })
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array)
})
Promise_all([soon(1), Promise.reject("X"), soon(3)])
    .then(array => {
        console.log("We should not get here")
    })
    .catch(error => {
        if (error != "X") {
            console.log("Unexpected failure:", error)
        }
    })