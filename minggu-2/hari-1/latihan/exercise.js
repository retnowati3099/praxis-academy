// 1. Create an object called shape that has the type property and a getType() method.
let shape = {
    type: " ",
    getType: function(){
        return this.type;
    }
};

// 2. Define a Triangle() constructor function whose prototype is shape. Objects created with Triangle() should have three own properties—a, b, and c, representing the lengths of the sides of a triangle.
function Triangle(x, y, z){
    this.type = "triangle";
    this.x = x;
    this.y = y;
    this.z = z;
}
Triangle.prototype = shape;

// 3. Add a new method to the prototype called getPerimeter().
Triangle.prototype.getPerimeter = function (){
    return this.x + this.y + this.z
}

// constructor didefinisikan sebagai prototype karena setiap object Triangle  
// harus mengetahui constructor functionnya, tetapi properti ini akan menjadi 
// sama untuk setiap instance dari Triangle
Triangle.prototype.constructor = Triangle;

// 4. Test my implementation
var t = new Triangle(1, 2, 3);
console.log(t.constructor === Triangle); // output: true
console.log(shape.isPrototypeOf(t)); // output: true
console.log(t.getPerimeter()) // output: 6
console.log(t.getType()); // output: triangle

// 5. Loop over t showing only own properties and methods (none of the prototype's)
for(key_value of Object.entries(t)){
    console.log(key_value);
}

// 6. Make the following code work
// Make the following code work:
// [1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle();       
// [2, 4, 1, 8, 9, 6, 5, 3, 7]
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle());
