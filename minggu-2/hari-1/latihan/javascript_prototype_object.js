// JavaScript Prototype Object
// sintaks: ClassName.prototypeMerhodName

function Employee(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// Menambahkan method baru ke constructor function
Employee.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}

let employee1 = new Employee("Retno", "Wati");
let employee2 = new Employee("Itaw", "Onter");
console.log(employee1.fullName());
console.log(employee2.fullName());

// menambahkan properti baru ke constructor function
Employee.prototype.company = "ManaAja";
let employee3 = new Employee("Rew");
console.log(employee3.company);
