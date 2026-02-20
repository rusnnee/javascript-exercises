// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


// add a <p> with red text that says “Hey I’m red!”

const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey, I'm red";
container.appendChild(paragraph);


// an <h3> with blue text that says “I’m a blue h3!”

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3";
container.appendChild(h3);

/* a <div> with a black border and pink background color with:
- another <h1> that says “I’m in a div”
- a <p> that says “ME TOO!”
- Hint for this one: after creating the <div> with createElement, 
    append the <h1> and <p> to it before adding it to the container. */

const div = document.createElement("div")
div.setAttribute ("style", "border: 2px solid black", "background-color: pink");

const h1Child = document.createElement("h1");
h1Child.textContent = "Im in a div";

const pChild = document.createElement ("p");
pChild.textContent = "ME TOO"

div.appendChild (h1Child);
div.appendChild (pChild);
container.appendChild(div);