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

function createCircle({ x, y, center = createPoint(x, y), radius }) {
    return {
        getCenterX: () => center.getX(),
        getCenterY: () => center.getY(),
        getRadius: () => radius,
        moveCenterTo: (x, y) => center.moveTo(x, y),
        toString: () => `Circle(Center: ${center.toString()}, Radius: ${radius})`,
    }
}

console.log(createCircle({ x: 2, y: 2, radius: 4 }).getCenterX())
console.log(createCircle({ center: createPoint(2, 2), radius: 4 }).getCenterX())

