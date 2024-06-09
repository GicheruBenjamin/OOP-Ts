

interface Engine {
    start(): void;
    stop(): void;
  }
  
  class CarEngine implements Engine {
    start() {
      console.log("Car engine started.");
    }
    stop() {
      console.log("Car engine stopped.");
    }
  }
  
  class Car {
    private engine: Engine;
    constructor(engine: Engine) {
      this.engine = engine;
    }
    startCar() {
      this.engine.start();
    }
    stopCar() {
      this.engine.stop();
    }
  }
  
  const myCar = new Car(new CarEngine());
  myCar.startCar(); // Car engine started.
  myCar.stopCar(); // Car engine stopped.