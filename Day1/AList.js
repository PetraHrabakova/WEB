function arrayToList(array) {
    let list = {}
    for (let i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list,
        }
    }

    return list
}

function listToArray(list) {
    let array = []
    // Every iteration, "node" points to the current sublist, and the body 
    // can read its "value" property to get the current element
    for (let node = list; node; node = node.rest) {
        if (node.value != undefined)
            array.push(node.value)
    }
    return array;
}

function prepend(number, list) {
    let new_list = {
        value: number,
        rest: list,
    }
    return new_list;
}

function nth(list, number) {
    if (!list) return undefined
    else if (number == 0) return list.value
    else return nth(list.rest, number - 1)
}


console.log(arrayToList([10, 20]))
console.log(listToArray(arrayToList([10, 20, 30])))
console.log(prepend(10, prepend(20, null)))
console.log(nth(arrayToList([10, 20, 30]), 1))