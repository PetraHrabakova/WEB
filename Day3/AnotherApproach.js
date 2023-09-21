class Point {
    x
    y
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    getX() { return this.x; }
    getY() { return this.y; }
    moveTo(newX, newY) { x = newX, y = newY }
    toString() { return `[${this.x}, ${this.y}]` }
}

class Circle {
    radius
    center
    constructor(center, radius) {
        this.center = center,
            this.radius = radius
    }
    getCenterX() { return this.center.getCenterX() }
    getCenterY() { return this.center.getCenterY() }
    getRadius() { return this.radius }
    moveCenterTo(newX, newY) { this.center.moveCenterTo(newX, newY) }
    toString() { return `Circle(Center: ${this.center.toString()}, Radius: ${this.radius})` }

}

console.log(new Circle(new Point(1, 2), 4).toString())