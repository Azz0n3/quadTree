
class Rectangle {
    constructor(x, y, height, width) {
        this.trueX = x + width / 2
        this.trueY = y + height / 2
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

    contains({ x, y }) {
        if (x > this.trueX - this.width / 2 &&
            x < this.trueX + this.width / 2 &&
            y > this.trueY - this.height / 2 &&
            y < this.trueY + this.height / 2) {
            return true;
        };
        return false;
    }
}