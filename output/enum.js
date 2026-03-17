"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let move = Direction.Up;
console.log(move);
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["Error"] = 500] = "Error";
})(Status || (Status = {}));
let result = Status.Success;
console.log(result);
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
let myRole = Role.Admin;
console.log(myRole);
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Delivered"] = 1] = "Delivered";
    OrderStatus[OrderStatus["Cancelled"] = 2] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
let order = OrderStatus.Delivered;
console.log(order);
