enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
console.log(move);

enum Status {
  Success = 200,
  NotFound = 404,
  Error = 500
}

let result: Status = Status.Success;
console.log(result);


enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let myRole: Role = Role.Admin;
console.log(myRole);


enum OrderStatus {
  Pending,
  Delivered,
  Cancelled
}

let order = OrderStatus.Delivered;
console.log(order);
