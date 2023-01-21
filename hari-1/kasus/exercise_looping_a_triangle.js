// menggunakan 1 for loop
let hash1 = "#";
for (let i = 0; i < 7; i++) {
    console.log(hash1);
    hash1 += "#";
}

// menggunakan 1 for loop
let hash2 = "";
for (let i = 0; i < 7; i++) {
    hash2 += "#";
    console.log(hash2);
}

// menggunakan nested for
for (let i = 1; i <= 7; i++) {
    let hash3 = "";
    for (let j = 1; j <= i; j++) {
        hash3 += "#";
    }
    console.log(hash3);
}