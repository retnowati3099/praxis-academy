//break statement

let a = 0; //inisialisasi variabel a dengan nilai 0
let b = 0; //inisialisasi variabel b dengan nilai 0
while (a < 5) {
    a++;
    if (a === 3) {
        break;
    }
    b += a;
    console.log(b);
}

/*
output: 
1
3
*/


/*let theValue = 4; 
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
for (let i = 0; i < a.length; i++) {
    if (a[i] === theValue) {
        break;
    }
    console.log(a[i])
}*/