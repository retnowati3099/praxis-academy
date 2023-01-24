// class adalah template/cetakan/prototype dari object

// sebuah class dapat didefinisikan dengan 2 cara, yaitu
// class expression dan class declaration

// declaration
class Rectangle1{
    constructor (height, width){
        this.height = height;
        this.width = width;
    }
}

// expression; classnya anonim tetapi diassign ke variabel
const Rectangle2 = class{
    constructor (height, width){
        this.height = height;
        this.width = width;
    }
};

// expression; classnya memiliki nama sendiri
const Rectangle3 = class RectangleThree{
    constructor (height, width){
        this.height = height;
        this.width = width;
    }
};

// constructor
// constructor method adalah method spesial untuk membuat dan menginisialisasi object yang dibuat dengan class
// Sebuah constructor dapat menggunakan keyword super untuk memanggil constructor dari super class

// method
// method dapat berupa plain function, async function, generator function, atau async generator function
class Rectangle{
    constructor (height, width){
        this.height = height;
        this.width = width;
    }

    // getter
    get area(){
        return this.calArea();
    }

    // method
    calArea(){
        return this.height * this.width;
    }

    *getSides(){
        yield this.height;
        yield this.width;
        yield this.height;
        yield this.width;
    }
}

const square = new Rectangle(10, 10);
console.log(square.area); // output 100
console.log([...square.getSides()]); // [ 10, 10, 10, 10 ]

// static method
// suatu atribut atau pun method dapat diakses oleh class atau object tanpa harus melakukan instansiasi
class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static displayName = "Point";
    static distance(a, b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(3, 3);
const p2 = new Point(10, 10);
console.log(p1.displayName); // output = undefined
console.log(p1.distance); // output = undefined
console.log(p2.displayName); // output = undefined
console.log(p2.distance); // output = undefined

console.log(Point.displayName); // output = Point
console.log(Point.distance(p1, p2)); // output = 9.899494936611665

// inheritance
// keyword extends digunakan di class declarations atau class expression untuk membuat sebuah class sebagai child dari constructor lain (baik sebuah class atau sebuah fungsi)

class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a noise`);
    }

}

class Dog extends Animal{
    constructor(name){
        super(name); // memanggil super class constructor dan memberikan parameter nama
    }
    speak (){
        super.speak(); // memanggil method yang sama dari duper class
        console.log(`${this.name} barks.`);
    }
}

const d= new Dog("Helli");
d.speak();
