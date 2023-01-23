// contoh true prototypal inheritance style di JavaScript
// pembuatan objek menggunakan literal
// {} adalah notasi

const foo = {name: "foo", one: 1, two: 2};


// object lainnya
const bar = {two: "two", three: 3};

// Object.setPrototypeOf() adalah suatu method yang diperkenalkan dalam ECMAScript 2015
Object.setPrototypeOf(bar, foo); // sekarang foo adalah prototype dari bar

// jika berusaha untuk mengakses properti foo dari bar
// sudah bisa
console.log(bar.one);

// properti object child juga bisa diakses
console.log(bar.three);

console.log(bar.two);
console.log(bar.name);
console.log(foo.name);


const foo2 = {one: 1, two: 2};
// bar.[[prototype]] = foo
const bar2 = Object.create(foo2);
bar2.three = 3
console.log(bar2.one);
console.log(bar2.two);
console.log(bar2.three);

// contoh prototype lainnya
function Student() {
    this.name = "Retno";
    this.gender = "F";
} 

Student.prototype.age = 15;

let studObj1 = new Student();
console.log(studObj1.age); // output: 15

let studObj2 = new Student();
console.log(studObj2.age); // output: 15
console.log(Student.prototype); // { age: 15 }
console.log(studObj1.prototype); // undefined
console.log(studObj1.__proto__); // { age: 15 }
console.log(typeof Student.prototype); // object
console.log(typeof studObj1.__proto__); // object
console.log(Student.prototype === studObj1.__proto__); // true


function Student2(){
    this.name = 'Namira';
    this.gender = 'M';
}

let obj = new Student2();
Student2.prototype.sayHi = function(){
    console.log("Hai!");
}

let obj2 = new Student();
let proto = Object.getPrototypeOf(obj2);
console.log(proto.constructor); // [Function: Student]

// changing prototype
function Student3(){
    this.name = "Alfa";
    this.gender = "F";
}

Student3.prototype.age = 22;
let stuObj1 = new Student();
console.log("stuObj1.age: " + stuObj1.age); // stuObj1.age: 15
let stuObj2 = new Student();
console.log("stuObj2.age: " + stuObj2.age); // stuObj2.age: 15

Student.prototype = {age : 20};
let stuObj3 = new Student();
console.log("StuObj3.age: " + stuObj3.age); // StuObj3.age: 20
console.log("stuObj1.age: " + stuObj1.age); // stuObj1.age: 15
console.log("stuObj2.age: " + stuObj2.age); // stuObj2.age: 15

// use of prototype
Student.prototype.sayHello = function(){
    console.log("Hello");
};

let stObj = new Student();
stObj.toString()