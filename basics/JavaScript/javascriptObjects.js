let employee = {
    firstName: "first",
    lastName: "last",
    age: 23,
    dept: "cs",
    salary: 25000,

    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
    },

    updateSalary: function (newSalary) {
        this.salary = newSalary;
    },
}

console.log(employee);
console.log(employee.age);
console.log(employee.dept);
console.log(employee.firstName);
employee.fullName();

employee.age = 24;
console.log(employee.age);

employee.updateSalary(30000);
console.log(employee.salary);

// using new keyword

let obj = new Object();
obj.name = "fawzan";
obj.age = 25;
obj.salary = 50000;

obj.getDetails = function () {
    console.log(obj.name + " " + obj.age + " " + obj.salary);
}

console.log(obj);
console.log(obj.name);
obj.getDetails();