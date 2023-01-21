/*
Write a JavaScript program to construct the following pattern, using a nested for loop.
*/
let star;
for (let i = 1; i <= 6; i++) {
    for (let j = 1; j < i; j++) {
        star = star + "* ";
    }
    console.log(star);
    star = "";
}

/*
let stars = "";
let lines = 5; // banyak baris
for (let i = 0; i < lines; i++) {
    stars += "* ";
    console.log(stars);
}
*/

/*

output:
* 
* * 
* * *
* * * *
* * * * *

*/