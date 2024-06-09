var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
function calculateTotalArea(shapes) {
    var totalArea = 0;
    shapes.forEach(function (shape) {
        totalArea += shape.getArea();
    });
    return totalArea;
}
var shapes = [new Rectangle(5, 10), new Circle(7)];
console.log(calculateTotalArea(shapes));
