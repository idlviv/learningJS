var Box = (function () {
    function Box(x, y) {
        this.x = x;
        this.y = y;
    }
    Box.prototype.mult = function () {
        return this.x * this.y;
    };
    return Box;
}());
var box1 = new Box(4, 5);
console.log(box1.mult());
console.log(box1.x);
console.log(box1.y);
