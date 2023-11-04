class Calculator {

    add(x, y) {
        return x + y;
    }

    substract(x, y) {
        if (x <= y) return y - x;
        else return y - x;
    }

    divide(x, y) {
        if (x <= y) return y / x;
        else return x / y;
    }

    multiply(x, y) {
        if (!(x <= 0 || y <= 0)) return x * y;
    }
}

const calculator = new Calculator();

it("Returns 5 + 6", () => {
    const number = calculator.add(5, 6);
    expect(number).toBe(11);
})

it("Returns 6 - 5", () => {
    const number = calculator.substract(5, 6);
    expect(number).toBe(1);
})

it("Returns 5 / 4", () => {
    const number = calculator.divide(5, 4);
    console.log(number)
    expect(number).toBeCloseTo(1.25);
})

it("Returns 5 * 4", () => {
    const number = calculator.multiply(5, 4);
    expect(number).toBe(20);
})



