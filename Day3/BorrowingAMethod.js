let obj = { one: true, two: true, hasOwnProperty: true }

// Fix this call
console.log(Object.prototype.hasOwnProperty.call(obj, "one"))


// console.log(obj.hasOwnProperty("one"))