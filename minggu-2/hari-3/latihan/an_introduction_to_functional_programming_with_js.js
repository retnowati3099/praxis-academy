// Dalam functional programming, function adalah firs class citizen

// Function dapaT di-assign ke variabel
const f = (m) => console.log(m);
f("You are my truth love."); // output: You are my truth love.

// Karena function dapat di-assign ke variabel, function dapat ditambahkan ke object
const obj =  {
    f(m) {
        console.log(m);
    }
} 
obj.f("You are my truth love."); // output: You are my truth love.

// function dapat ditambahkan ke array
const a = [
    m => console.log(m)
]
a[0]("You are my truth love.") // output: You are my truth love.

// function dapat digunakan sebagai argumen ke function lain
const func = (m) => () => console.log(m);
const func2 = (func3) => func3()
func2(func("You are my truth love.")); // output: You are my truth love.

// function dapat dikembalikan dengan function
const createF = () => {
    return (m) => console.log(m);
}
const fun = createF();
fun("You are my truth love."); // output: You are my truth love.


// Higher Order Function
// Function dapat menerima fungsi sebagai argumen atau mengembalikan function yang disebut higher order function
// Contoh di library standar js termasuk Array.map(), Array.filter(), dan Array.reduce()
// Declarative Programming --> akan menghindari penggunaan loop, sebagai gantinya menggunakan konstruksi pemrograman seperti map, reduce,, dan filter


// Immutability
// Di functional programming, data tidak pernah berubah
// 1. Const
// 2. Object.assign()
const redObj = {
    color: "red"
}
const yellowObj = Object.assign(
    {},
    redObj, 
    {color: "yellow"}
)

// 3. concat, spread operator -> menambahkan item ke array
// concat 
const x = [1, 2];
const y = [1, 2].concat(3);
console.log(y); // output: [ 1, 2, 3 ]
// spread operator
const z = [...x, 3]
console.log(z) // output: [ 1, 2, 3 ]

// 4. filter()
const i = x.filter((v, k) => k < 1)
console.log(i); // output: [1]


// Purity
// 1. Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama
// 2. Hanya bergantung pada argumen yang diberikan
// 3. Tidak menimbulkan efek samping

// Data Tansformation
const arr1 = [1, 2, 3]
// 1. Array.map() -> menciptakan array baru dengan hsil dari function yang dieksekusi pada setiap item dari array asli
const arr2 = arr1.map((v, k) => v * k)
console.log(arr2); // output: [ 0, 2, 6 ]

// 2. Array.reduce()
const sum = arr1.reduce((partial, v) => partial + v, 0);
console.log(sum); // output: 6

const o = arr1.reduce((obj, k) => {
    obj[k] = k; return obj},
    {}
)
console.log(o); // { '1': 1, '2': 2, '3': 3 }


// Recursion --> memanggil dirinya sendiri
let fibonacci = (n) => n <= 1 ? 1 : f(n-1) + f(n-2);
