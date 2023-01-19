// closure adalah suatu fungsi yang dapat mengakses variabel di dalam lexical scope-nya
// lexical scope adalah sebuah fungsi bersarang, fungsi yang berada di dalam memiliki akses ke variabel di lingkup induknya

// contoh closure 1
function multiplier(factor) {
    return num => num * factor;
}

let twice = multiplier(2);
console.log(twice(5)); // output: 10
console.log(multiplier(2)(5)); // output: 10

console.log("-------------------")

// contoh closure 2
function init() {
    var name = "Retno Wati"; // variabel lokal di dalam scope fungsi init
    function greet() { // inner function, merupakan contoh closure
        console.log(`Hello, ${name}`) // memanggil variabel yang dideklarasikan di parent function
    }
    greet();
}

init();

console.log("-------------------")

function init2() {
    var name = 'Retno Wati';

    function greet() {
        console.log(`Halo, ${name}`);
    }
    return greet;
}
let myFunction = init2();
myFunction();