let string = "Hello world";

console.log(string);
console.log(string.length);
console.log(string.charAt(10));
console.log(string.charCodeAt(10)); //returns ASCII value
console.log(string.slice(6));
console.log(string.slice(6, 10));
console.log(string.substring(6, 11));
console.log(string.substr(0, 4)); // depricated
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.concat("  hell0"));

let string2 = "    hello     ";

console.log(string2.trim());
console.log(string2.trimEnd());
console.log(string2.trimStart());

let string3 = "Hello";

console.log(string3.padStart(10, 0));
console.log(string3.padEnd(10, 0));
console.log(string3.repeat(3));

let string4 = "hello world world";

console.log(string4.replace("world", "all"));
console.log(string4.replaceAll("world", "All"));

console.log(string4.split(" "));

console.log(string4.indexOf("w"));
console.log(string4.lastIndexOf("w"));

let text = "Please locate where 'locate' occurs!";
console.log(text.search("locate"));

let text2 = "The rain in SPAIN stays mainly in the plain";
console.log(text2.match("ain"));

let floating = 2.5666;
console.log(floating.toFixed(2));