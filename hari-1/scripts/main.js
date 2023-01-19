/* const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!"; */

let myVariable;
myVariable = "Bob";
//let myVariable = "Bob";
console.log(myVariable);
myVariable = "Steve";
console.log(myVariable);


//COMMENT
/*
Everithing in between is a comment
*/

// This is a comment

let iceCream = "chocolate";
if (iceCream === "chocolate") {
    alert("Yay, I love chocolate ice cream!");
} else {
    alert("Awwww, but chocolate is my favorite…");
}


//FUNGSI UNTUK MENGHITUNG PERKALIAN DUA ANGKA
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

console.log(multiply(4, 7))


//EVENTS
document.querySelector("html").addEventListener("click", function() {
    alert("Ouch! Stop poking me!");
});


//ADDING AN IMAGE CHARGER
const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

// ADDING A PERSONALIZED WELCOME MESSAGE
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", "myName");
        myHeading.textContent = `Mozilla is cool ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}