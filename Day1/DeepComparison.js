function deepEqual(obj1, obj2) {
    if (typeof obj1 == "object" && obj1 != null &&
        typeof obj2 == "object" && obj2 != null) {
        let keysA = Object.keys(obj1),
            keysB = Object.keys(obj2)
        if (keysA.length == keysB.length) {
            for (let key of keysA) {
                if (!keysB.includes(key) || !deepEqual(obj1[key], obj2[key])) return false
            }
            return true;
        }
        else return false;
    }
    else return obj1 === obj2
}



let obj = { here: { is: "an" }, object: 2 }
console.log(deepEqual(obj, obj))
console.log(deepEqual(obj, { here: 1, object: 2 }))
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }))
