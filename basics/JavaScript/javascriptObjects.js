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