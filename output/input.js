"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function submit() {
    const name = document.getElementById("username");
    const username = name.value;
    const age = document.getElementById("age");
    const userage = age.value;
    const pasword = document.getElementById("password");
    const userpasword = pasword.value;
    console.log(username, userage, userpasword);
}
submit();
