"use strict";
// Using fetch (basic way)
Object.defineProperty(exports, "__esModule", { value: true });
async function getusers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.log("error");
        return [];
    }
}
async function showUsers() {
    const users = await getusers();
    const ul = document.getElementById("users");
    users.forEach(user => {
        const li = document.createElement("li");
        li.innerText = `${user.name} - ${user.email}`;
        ul.appendChild(li);
    });
}
showUsers();
