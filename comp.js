var CarEngine = /** @class */ (function () {
    function CarEngine() {
    }
    CarEngine.prototype.start = function () {
        console.log("Car engine started.");
    };
    CarEngine.prototype.stop = function () {
        console.log("Car engine stopped.");
    };
    return CarEngine;
}());
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.startCar = function () {
        this.engine.start();
    };
    Car.prototype.stopCar = function () {
        this.engine.stop();
    };
    return Car;
}());
var myCar = new Car(new CarEngine());
myCar.startCar(); // Car engine started.
myCar.stopCar(); // Car engine stopped.
