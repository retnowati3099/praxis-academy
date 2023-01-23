// Object.keys, values, entries
let user = {
    name: "Retno Wati",
    age: 23
}

// Object.keys(obj) -> mengembalikan sebuah array yang berisi keys dari objek tersebut
console.log(Object.keys(user)); // output: [ 'name', 'age' ]

// Object.values(obj) -> mengembalikan sebuah array yang beisi values dari objek tersebut
console.log(Object.values(user)); // [ 'Retno Wati', 23 ]

// Object.entries(obj) -> mengembalikan sebuah array yang berisi pasangan [key, value]
console.log(Object.entries(user)); // [ [ 'name', 'Retno Wati' ], [ 'age', 23 ] ]

// looping melalui value
for (let value of Object.values(user)){
    console.log((value));
}
/*
Retno Wati
23
*/

// Transforming objects
let prices = {
    banana: 1,
    orange: 2,
    meat: 4
};

let doublePrices = Object.fromEntries(
    // convert prices to array, map each key/value pair into another pair
    // and then fromEntries gives back the object
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2]));
console.log(doublePrices.meat);

// aum the properties
let salaries = {
    "Retno": 5000000,
    "Dinda": 4000000,
    "Salma": 3000000
}

// mencari jumlah gaji menggunakan Object.values dan for.. of loop
function sumSalaries(salaries){
    let sum = 0;
    for (let salary of Object.values(salaries)){
        sum += salary;
    }
    return sum;
}
console.log(sumSalaries(salaries));

// menghitung jumlah gaji menggunakan Object.values dan reduce
function sumSalaries2(salaries){
    return Object.values(salaries).reduce((a, b) => a + b);
}
console.log(sumSalaries2(salaries));

// count properties
let siswa = {
    name: "Riska",
    age: 16
};

// menghitung jumlah properti di dalam objek
function count(siswa){
    return Object.keys(siswa).length;
}
console.log(count(siswa));