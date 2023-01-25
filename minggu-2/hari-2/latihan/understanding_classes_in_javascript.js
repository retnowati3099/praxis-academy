// class adalah fungsi
// class dideklarasi dengan keyword class

// inisialisasi fungsi dengan function expression
const x = function(){};

// inisialisasi class dengan class expression
const y = class{};

// mengakses [[Prototype]] dari suatu object menggunakan method Object.getPrototipeOf()
console.log(Object.getPrototypeOf(x)); // output: {}
console.log(Object.getPrototypeOf(y)); // output: {}

// inisialisasi constructor dari fungsi
const constructorFromFunction = new x();
console.log(constructorFromFunction); // output: x {}

// inisialisasi constructor dari class
const constructorFromClass = new y ();
console.log(constructorFromClass); // output: y {}

// mendefinisikan class
// constructor function diinisialisasi dengan sejumlah parameter yang diassign sebagai properti this
// menginisialisasi constructor function
function Hero(name, level){
    this.name = name;
    this.level = level;
}

// menambahkan method ke constructor
Hero.prototype.greet = function(){
    return `${this.name} say hello.`
}

// membuat constructor baru dari parent
function Mage(name, level, age){
    // men-chain constructor dengan call
    Pahlawan.call(this, name, level);
    this.age = age;
}

const hero = new Hero("Itaw", 2, 23); // output: Hero { name: 'Itaw', level: 2 }
console.log(hero);

// menginisialisasi class definition
class Pahlawan{
    constructor(nama, level){
        this.nama = nama;
        this.level = level;
    }

    // menambahkan method ke constructor
    greet(){
        return `${this.nama} katakan hello`;
    }
}

const p = new Pahlawan("Varg", 1)
console.log(p); // output: Pahlawan { nama: 'Varg', level: 1 }

// membuat class baru dari parent
class Guru extends Pahlawan{
    constructor(nama, level, umur){
        // chain constructor dengan super
        super(nama, level);

        // menambahkan properti baru
        this.umur = umur;
    }
}

const pahlawan = new Pahlawan("onter", 2, 23);
console.log(pahlawan); // output: Pahlawan { nama: 'onter', level: 2 }