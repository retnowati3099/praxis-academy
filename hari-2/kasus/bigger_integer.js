input1 = parseInt(prompt("Bilangan bulat 1: "));
input2 = parseInt(prompt("Bilangan bulat 2: "));
if (input1 > input2) {
    //console.log(`${input1} lebih besar dari ${input2}`);
    document.getElementById("integer").innerHTML = input1 + " lebih besar dari " + input2;
} else if (input1 < input2) {
    //console.log(`${input1} kurang dari ${input2}`);
    document.getElementById("integer").innerHTML = input2 + " lebih besar dari " + input1;
} else {
    //console.log(`${input1} sama dengan ${input2}`);
    document.getElementById("integer").innerHTML = input1 + " sama dengan " + input2;
}