let a = document.createElement("div");
a.style.width = "200px";
a.style.height = "200px";
a.style.backgroundColor = "red";
a.innerText = "<p>hello</p>";
a.innerHTML = "<h1>hello</h1>";
a.className = "container";
a.id = "div1";
document.body.appendChild(a);

let c = document.getElementById("div1");

let b = document.createElement("p");
b.style.backgroundColor="orange";
b.innerHTML = "<p>helllllllllll</p>";

let d = document.createElement("p");
d.style.backgroundColor="blue";
d.innerHTML = "<p>helllllllllll</p>";

c.after(b);
c.before(d);