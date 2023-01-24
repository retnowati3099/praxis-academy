// constructor functions
function Vehicle1(make, model, color){
    this.make = make;
    this.model = model;
    this.color = color;
    //this.year = year;
    this.getName = function (){
        return this.make + " " + this.model; 
    }
}

// create object
let car = new Vehicle1("Toyota", "Corolla", "Black");
let car2 = new Vehicle1("Honda", "Civic", "White");

// car2.year = "2012";
// car.prototype.year = "2016";

// classses
class Vehicle2 {
    constructor(make, model, color){
        this.make = make;
        this.model = model;
        this.color = color;
    }

    getName(){
        return this.make + " " + this.model;
    }
}

let car3 = new Vehicle2("Toyota", "Corolla", "Black");

// class featueres --> constructor, static methods, getters/setters, subclassing
class Vehicle3{
    //constructor
    constructor(make, model, color){
        this.make = make;
        this.model = model;
        this.color = color;
    }
    
    // getters untuk mendapatkan nilai properti
    get model(){
        return this._model;
    }

    // setters untuk mensetting nilai properti
    set model (value){
        this._model = value;
    }

    getName(){
        return this.make + " " + this.model;
    }

    // static method
    static getColor(v){
        return v.color;
    }
}
let myCar = new Vehicle3("Honda", "Accord", "Purple");
console.log(Vehicle3.getColor(myCar)); // output: Purple

class Car extends Vehicle3{
    getName(){
        return super.getName() + " - called base class function from child class."
        //return this.make + " " + this.model + " in child class."
    }
}

let myFavoriteCar = new Car("Honda", "Accord", "Purple");
console.log(myFavoriteCar.getName()); // Honda Accord - called base class function from child class.