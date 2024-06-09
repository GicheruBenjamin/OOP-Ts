
interface Shape {
    getArea(): number;
  }
  
  class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
    getArea() {
      return this.width * this.height;
    }
  }
  
  class Circle implements Shape {
    constructor(private radius: number) {}
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  function calculateTotalArea(shapes: Shape[]) {
    let totalArea = 0;
    shapes.forEach((shape) => {
      totalArea += shape.getArea();
    });
    return totalArea;
  }
  
  const shapes: Shape[] = [new Rectangle(5, 10), new Circle(7)];
  console.log(calculateTotalArea(shapes)); 