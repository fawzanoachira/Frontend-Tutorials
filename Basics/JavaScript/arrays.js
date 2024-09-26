let a = [1, 2, 3, 4, 5];

console.log(a);

console.log(a.length);
console.log(a.toString());
console.log(a.at(1));
console.log(a.join("*"));
console.log(a.concat(6, 7, 8, 9));
console.log(a);
console.log(a.pop());
console.log(a);
console.log(a.push(6));
console.log(a);
console.log(a.shift());
console.log(a);

let b = ["ban", "hsf", "fdhas", "jhsd"];

console.log(b.copyWithin(0, 2, 4));

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat(2)); // Output: [1, 2, 3, 4, 5, 6]

const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(1)); // Output: [1, 2, 3, 4, [5, 6]]

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
let removed = fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(removed);


const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(months);
console.log(spliced);

const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits2.slice(2);
console.log(fruits2);
console.log(citrus);