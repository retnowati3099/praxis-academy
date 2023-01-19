// continue statement

let a = 0; //inisialisasi variabel a dengan nilai 0
let b = 0; //inisialisasi variabel b dengan nilai 0
while (a < 5) {
    a++;
    if (a === 3) {
        continue;
    }
    b += a;
    console.log(b);
}
/*
output:
1
3
7
12 
*/