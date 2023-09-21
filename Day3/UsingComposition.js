function createPoint(x, y) {
    return {
        getX: () => x,
        getY: () => y,
        moveTo(newX, newY) {
            x = newX, y = newY
        },
        toString: () => `[${x}, ${y}]`,
    }
}

function createCircle(center, radius) {
    return {
        getCenterX: () => center.getX(),
        getCenterY: () => center.getY(),
        getRadius: () => radius,
        moveCenterTo(newX, newY) {
            center.moveTo(newX, newY)
        },
        toString: () => `Circle(Center(${center.toString()}, Radius(${radius})))`

    }
}

const circle = createCircle(createPoint(1, 2), 4)
circle.moveCenterTo(3, 4)
console.log(circle.toString())

/*

function createPoint(x, y) {
    return {
        getX: () => x,
        getY: () => y,
        moveTo(newX, newY) {
            x = newX,
                y = newY
        },
        toString: () => `[${x},${y}]`,
    }
}

function createCircle(center, radius) {
    return {
        getCenterX: () => center.getX(),
        getCenterY: () => center.getY(),
        getRadius: () => radius,
        moveCenterTo: (x, y) => center.moveTo(x, y),
        toString: () => `Circle(Center: ${center.toString()}, Radius: ${radius})`,
    }
}

console.log(createCircle(createPoint(1, 2), 4).toString())

*/