// function adalah subprogram yang didesain untuk menampilkan task tertentu
// function dieksekusi ketika mereka dipanggil (invoking function)
// value dapat dilewatkan ke dalam fungsi dan digunanak di dalam fungsi tersebut
// fungsi selalu return sebuh nilai
// fungsi adalah object

//MENDEFINISIKAN FUNGSI
// cara 1 : function declaration 
function myName1(name) {
    console.log(name);
}

// memanggil fungsi myName1()
myName1("retno wati");

console.log("------------------------");

// cara 2: Function expressions
let myName2 = function(name) {
    console.log(name);
}

// memanggil fungsi myName2
myName2("itaw onter")

console.log("------------------------");

// cara 3: arrow function expression
let myName3 = (name) => {
    console.log(name);
}

// memanggil fungsi myName3
myName3("rew");

console.log("------------------------");


// FUNGSI TANPA PARAMETER
function myName() {
    console.log("Hallo war!");
}
myName();
console.log("------------------------");


// FUNGSI DENGAN KEMBALIAN
let double = function(num) {
    return num * 2;
}
console.log(double(5));
console.log("------------------------");


// OPTIONAL ARGUMENTS
function square(x) {
    return x * x;
}
console.log(square(4, true, "hedgehog")); // output: 10
console.log(square(true, 4, "hedgehog")); // output: 1
console.log(square("hedgehog", true, 4)); // output: NaN
console.log("------------------------");

function minus(a, b) {
    if (b === undefined) {
        return -a;
    } else {
        return a - b;
    }
}
console.log(minus(5));
console.log(minus(20, 15));
console.log("------------------------");

function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(power(2)); // output: 4
console.log(power(2, 3)); // output: 8