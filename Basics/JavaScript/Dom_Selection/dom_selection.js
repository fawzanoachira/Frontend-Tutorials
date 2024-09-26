// let a = document.getElementById("para");
// a.innerHTML = "Hello world";
// a.style.color = "blue";
// a.style.border = "2px solid";

// let b = document.getElementsByClassName("head");
// b[0].innerHTML = "Java";
// b[1].innerHTML = "JavaScript";
// b[2].innerHTML = "Python";

// b[0].style.color = "green";
// b[1].style.color = "red";
// b[2].style.color = "blue";

// let c = document.getElementsByName("javascript");
// c[0].innerHTML = "JAAAAAAAAAVAAAAAAASCRIPTTTTTT";

// let d = document.getElementsByTagName("h1");
// for (i = 0; i <= d.length - 1; i++) {
//     d[i].innerHTML = i + " " + "Hello";
// }

// let e = document.querySelector("#para");
// e.style.color = "red";

// let f = document.querySelectorAll(".head");
// f[0].style.color = "cyan";

// let attributeName1 = e.getAttribute("name");

// console.log(attributeName1);

// console.log(e.hasAttribute("name"));


// e.setAttribute("name", "javascript");
// let attributeName2 = e.getAttribute("name");
// console.log(attributeName2);

// e.removeAttribute("name");
// let attributeName3 = e.getAttribute("name");

// console.log(attributeName3);
// console.log(e.hasAttribute("name"));

// let g = document.getElementById("para");
// console.log(g.className);

// let h = document.getElementById("para");
// console.log(h.classList);

let i = document.getElementById("main-id");
let childParent = i.parentElement;
console.log(i.parentNode);
console.log(childParent);
i.style.width = "200px";
i.style.height = "200px";
i.style.backgroundColor = "red";