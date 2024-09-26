let name;
let age;
let salary;

function emp(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}

let employeeObj = new emp("name", 23, 34242);

console.log(employeeObj);

employeeObj.getDetails = function () {
    console.log("details are here");
}

employeeObj.getDetails();