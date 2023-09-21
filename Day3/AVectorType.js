class Vec {
    x
    y
    constructor(x, y) {
        this.x = x,
            this.y = y
    }
    plus(vector) {
        const newX = this.x + vector.x
        const newY = this.y + vector.y
        return new Vec(newX, newY)
    }
    minus(vector) {
        const newX = this.x - vector.x
        const newY = this.y - vector.y
        return new Vec(newX, newY)
    }
    length() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y))
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)))
console.log(new Vec(1, 2).minus(new Vec(2, 3)))
console.log(new Vec(3, 4).length())