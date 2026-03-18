const title = document.getElementById("title");  
// Problem: TypeScript says it might be null 

const title1 = document.getElementById("title") as HTMLElement;
title1.textContent = "Hello Mansoor";
title1.innerHTML = "Updated Text";
title1.style.color = "red";

const heading2 = document.getElementById("heading2")!;
heading2.innerText = "Hello";
// ! means: "I am sure it exists"



const newPara = document.createElement("p");
newPara.innerText = "New Paragraph";
document.body.appendChild(newPara);


const button = document.getElementById("btn") as HTMLButtonElement;
button.addEventListener("click", () => {
  alert("Button Clicked!");
});
