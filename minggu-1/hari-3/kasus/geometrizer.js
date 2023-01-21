// Menghitung keliling dan luas lingkaran 
let radius;

// menghitung keliling lingkaran
let calcCircumfrence = (radius) => {
        let circumfrence = 2 * Math.PI * radius;
        //console.log(`The circumfrence is ${circumfrence.toFixed(2)}`);
        document.getElementById("keliling-lingkaran").innerHTML = `The circumfrence is ${circumfrence.toFixed(2)}`;
    }
    //calcCircumfrence(10)

//menghitung luas lingkaran
let calArea = (radius) => {
        let area = Math.PI * radius * radius;
        //console.log(`The area is ${area.toFixed(2)}`);
        document.getElementById("luas-lingkaran").innerHTML = `The area is ${area.toFixed(2)}`;
    }
    //calArea(10);