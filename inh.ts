
class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    move() {
      console.log(`${this.name} is moving.`);
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log(`${this.name} is barking.`);
    }
  }
  
  const myDog = new Dog("Buddy");
  myDog.move(); 
  myDog.bark(); 