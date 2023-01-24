// Create an object called shape that has the type property and a getType() method.
// Define a Triangle() constructor function whose prototype is shape. Objects created with Triangle() should have three own properties—a, b, and c, representing the lengths of the sides of a triangle.
// Add a new method to the prototype called getPerimeter().
// Test your implementation with the following code:

// > var t = new Triangle(1, 2, 3);
// > t.constructor === Triangle;
       
// true
// > shape.isPrototypeOf(t);
//         true
// > t.getPerimeter();
//        6
// > t.getType();
       
// "triangle"

// Loop over t showing only own properties and methods (none of the prototype's).
// Make the following code work:

// > [1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle();     
// [2, 4, 1, 8, 9, 6, 5, 3, 7]


// Define a Triangle() constructor function
function Triangle(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
}

let shape = new Triangle();
shape.prototype.getType