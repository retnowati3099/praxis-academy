// membuat array marks dua dimensi yang menampung nama siswa dan nilainya
const marks = [
    ['David', 80],
    ['Vinoth', 77],
    ['Divya', 88],
    ['Ishitha', 95],
    ['Thomas', 68]
];


// inisialisasi variabel sum dengan nilai 0
let sum = 0;


// menghitung total jumlah nilai
for (let i = 0; i < marks.length; i++) {
    sum += marks[i][1];
}


// menghitung nilai rata - tata
let average = sum / marks.length;
console.log(`Average grade: ${average}`); // output: Average grade: 81.6

// mengkonversi nilai rata - rata ke huruf
if (average >= 90 && average < 100) {
    console.log('Grade: A');
} else if (average >= 80) {
    console.log('Grade: B');
} else if (average >= 70) {
    console.log('Grade: C');
} else if (average >= 60) {
    console.log('Grade: D');
} else if (average >= 0) {
    console.log('Grade: F');
}

/*
if (average < 60) {
    console.log('Grade: F');
} else if (average < 70) {
    console.log('Grade: D');
} else if (average < 80) {
    console.log('Grade: C');
} else if (average < 90) {
    console.log('Grade: B');
} else if (average < 100){
    console.log('Grade: A');
}
*/

// output: Grade: B