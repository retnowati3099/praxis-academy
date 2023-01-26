// currying adalah proses di functional programming yang mana 
// kita dapat mentransformasikan fungsi dengan banyak arguman 
// ke dalam sekuen dari nesting function

// Fungsi untuk menghitung perkalian tiga buah bilangan
function multiply(a, b, c){
    return a * b * c;
}
console.log(multiply(1, 2, 3)); // output: 6

// Menggunakan currying untuk menghitung perkalian tiga buah bilangan
function perkalian(a){
    return (b) => {
        return (c) => {
            return a * b * c;
        } 
    }
}
console.log(perkalian(1)(2)(3)); // output: 6

// Bentuk terpisah "perkalian(1)(2)(3)"
const perkalian1 = perkalian(1);
const perkalian2 = perkalian1(2);
const hasil = perkalian2(3)
console.log(hasil); // output: 6

// Menggunakan partial function untuk menghitung volume
function volume(l){
    return (w, h) => {
        return 1 * w * h;
    }
}

const hCy = volume(10);
console.log(hCy(20, 30)); // output: 600
console.log(volume(10)(20, 30)) // output: 600

// Currying dan partial application berhubungan, tetapi berbeda konsep
// Partial application mentransformasikan fungsi ke dalam fungsi lain dengan arity yang lebih kecil

// Fungsi untuk menghitung pembagian dua bilangan
function div(x, y){
    return x / y;
}

// Menggunakan partial function untuk menghitung pembagian dua bilangan
function div(x){
    return (y) => {
        return x / y;
    }
}

// Menggunakan currying untuk menghitung pembagian dua bilangan
function div(x){
    return (y) => {
        return x / y;
    }
}

// melalui currying dan partial function memberikan hasil yang sama tetapi mereka adalah dua entitas yang berbeda

// 1. Currying membuat penulisan modul kode yang kecil dapat digunakan dan dikonfigurasikan dengan mudah
// fungsi untuk menghitung diskon
function discount(price, discount){
    return price * discount;
}

console.log(discount(1000, 0.1)); // output: 100
console.log(discount(10000, 0.1)); // output: 1000
console.log(discount(100000, 0.1)); // output: 10000

function diskon(diskon){
    return (harga) => {
        return harga * diskon;
    }
}

const sepuluhPersenDiskon = diskon(0.1);
console.log(sepuluhPersenDiskon(100000)); // output: 10000

// 2. Currying meninggalkan pemanggilan fungsi dengan argumen yang sama secara sering
// fungsi menghitung volume balok
function volBalok(panjang, lebar, tinggi){
    return panjang * lebar * tinggi;
}

// jika balok memiliki tinggi yang sama, yaitu 300,
// kita akan memanggil fungsi di atas dengan tinggi 300 secara berulang
console.log(volBalok(100, 200, 300)); // output: 6000000
console.log(volBalok(200, 400, 300)); // output: 24000000
console.log(volBalok(300, 600, 300)); // output: 54000000



// currying untuk menyelesaikan problem di atas
function volumeBalok(panjang){
    return (lebar) => {
        return (tinggi) => {
            return panjang * lebar * tinggi;
        }
    }
}

const v = volumeBalok(300);
console.log(v(100)(200)); // output: 6000000
