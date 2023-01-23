// pengenalan JavaScript prototype
// Object dapat mewarisi fitur - fitur dari objek lain melalui prototypes. 

let person = {
    "name": "Retno"
}

// method toString() mengembalikan representasi dari objek person
console.log(person.toString()); // [object Object]

// method adalah properti dengan nilai berupa fungsi

console.log(typeof(Object)); // output: function
console.log(Object.prototype); // output: [Object: null prototype] {}
console.log(Object.prototype.constructor === Object); // true 

function Person(name){
    this.name = name;
}
console.log(Person); // [Function: Person]
console.log(person.prototype); // undefined

// mendefinisikan method di JavaScript prototype object
Person.prototype.greet = function(){
    return "Hi, I'm " + this.name + "!";
}

let p1 = new Person("onter");
let greeting = p1.greet();
console.log(greeting);

let s = p1.toString();
console.log(s);

let p2 = new Person("itaw");

// mendefinisikan method di dalam individual object
p2.draw = function (){
    return "I can draw."
}
console.log(p2.draw());

// getting prototype linkage
console.log(p1.__proto__ === Person.prototype); // true
console.log(p1.__proto__ === p2.__proto__); // true
console.log(p1.__proto__ === Object.getPrototypeOf(p1)); // true

// shadowing
console.log(p1.greet());
p1.greet = function(){
    console.log("Hello");
}
console.log(p1.greet());

// fungsi Object() memiliki properti yang disebut prototype yang mengacu object Object.prototype
// object Object.prototype memiliki semua properti dan method yang tersedia di semua object seperti toString() dan valueOf()
// object Object.prototype memiliki properti konstruktor yang mengacu fungsi Object
// setiap fungsi memiliki object prototype. Object prptotype ini mengacu objek Object.prototype via [[prototype]] linkage atau properti __proto__
// rantai prototype memungkinkan satu objek untuk menggunakan method dan properti dari object prototypenya via [[prototype]] linkages 
// method Object.getPrototypeOf() mengembalikan object dair object yang diberikan.