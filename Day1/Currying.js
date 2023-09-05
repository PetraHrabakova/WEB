function range(start, end, step = start < end ? 1 : -1) {
    if (end === undefined) return end => range(start, end)
    let result = []
    if (step > 0) 
        for (let i = start; i <= end; i+=step) result.push(i)
    if (step < 0)
        for (let i = start; i >= end; i+=step) result.push(i)
    return result
}


let rangeFrom3To = range(3);
let rangeFrom7To = range(7);

console.log(rangeFrom3To(3))

console.log(rangeFrom3To(8))

console.log(rangeFrom7To(9))


