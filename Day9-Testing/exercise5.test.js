function analyzeArray(array) {
    let sum = 0;
    if (array === null) return null;
    array.forEach(element => {
        if (!isNaN(element)) {
            sum += element;
        }
    });
    const average = Math.floor(sum / array.length);

    const minimum = Math.min(...array);
    const maximum = Math.max(...array);
    const length = array.length;

    return { average: average, min: minimum, max: maximum, length: length };
}

it("Returns an object with the following properties", () => {
    const object = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(object).toStrictEqual({ average: 4, min: 1, max: 8, length: 6 });
})