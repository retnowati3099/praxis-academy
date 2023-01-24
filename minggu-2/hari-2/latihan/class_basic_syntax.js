// Sintaks class
// class myClass{
//     // class methods
//     constructor(){ ... }
//     method1(){ ... }
//     method2(){ ... }
//     method3(){ ... }
//     ...
// }

class User{
    constructor(name){
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}

let user = new User("onter");
user.sayHi() // output: onter

// dalam JavaScript, class adalah jenis fungsi
console.log(typeof User); // output: function

console.log(User === User.prototype.constructor); // output: true

// contoh method dalam  User.prototype
console.log(User.prototype.sayHi); // output: [Function: sayHi]

// terdapat  tepat dua method dalam prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // output: [ 'constructor', 'sayHi' ]

// menulis class dalam pure function
// 1. membuat constructor function
function Pengguna(nama){
    this.nama = nama;
}
// sebuah function prototype memiliki property "constructor" secara default,
// sehingga kita tidak perlu untuk membuatnya

// 2. menambah method ke prototype
Pengguna.prototype.katakanHi = function (){
    console.log(this.nama);
}

let pengguna = new Pengguna("Rew");
pengguna.katakanHi(); // output: Rew

// class expression
let Pemakai = class {
    katakanHello(){
        console.log("Hello!");
    }
}

// class expression dengan nama
let Consumer = class MyClass{
    sayHello(){
        console.log(MyClass);
    }
};

// getters/setters
class Wearer{
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value.length < 4){
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
}

let wearer = new Wearer("Arwe");
console.log(wearer.name); // output: Arwe
wearer = new Wearer(""); // output: Name is too short.

// Sintaks dari basic class
// class MyClass {
//     prop = value; // property
  
//     constructor(...) { // constructor
//       // ...
//     }
  
//     method(...) {} // method
  
//     get something(...) {} // getter method
//     set something(...) {} // setter method
  
//     [Symbol.iterator]() {} // method with computed name (symbol here)
//     // ...
//   }

