const arr = [3, 5, 7];
arr.tiga = 'hello';
console.log(arr['tiga']); //output: hello
console.log(arr[3]); //output: undefined

// for... in --> iterate nama properti
for (const i in arr) {
    console.log(i);
}

console.log("--------------------------")

//for...of --> iterate nilai properti
// contoh 1
for (const i of arr) {
    console.log(i);
}
console.log("--------------------------")
    // contoh 2
const obj = { satu: 1, dua: 2 };
for (const [key, val] of Object.entries(obj)) {
    console.log(key, val);
}