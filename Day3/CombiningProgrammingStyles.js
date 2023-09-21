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

arrayOfCircles = [createCircle(createPoint(3, 5), 2),
createCircle(createPoint(1, 2), 4),
createCircle(createPoint(7, 6), 6),
createCircle(createPoint(3, 10), 45)
]

const newArray = arrayOfCircles.map(circle => circle.getRadius());

console.log(newArray); 