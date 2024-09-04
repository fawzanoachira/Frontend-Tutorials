try {
    let a = value2();
}
catch (e) {
    a = 0;
}
finally {
    console.log("executed");
}
let b = value1();
let c = a + b;
console.log(c);

function value2() {
    junk()
    return 20;
}

function value1() {
    return 30;
}