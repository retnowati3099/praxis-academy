/*
Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
*/

let num = 0

for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        num += i;
    }
}

console.log(`Hasil penjumlahan bilangan kelipatan 3 dan 5 di bawah seribu adalah ${num}`);

/*
output:
Hasil penjumlahan bilangan kelipatan 3 dan 5 di bawah seribu adalah 33165
*/