"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function total(total, item) {
    // let total = 100;
    // let item = 40
    console.log("total price  is " + total * item);
}
total(200, 20);
function simple(data) {
    console.log("any type data can be reacieved in params", data);
}
simple(34);
simple('string');
simple(true);
function anytype(data) {
    console.log(data, "any type data can recieved");
}
anytype(23);
anytype('34');
anytype(true);
