"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "aditya",
    class: 3,
    email: "adityasongh@gmail.com",
};
// :{}  function type obj
var createUser = function (_a) {
    var string = _a.name, number = _a.class;
    return {};
};
// let newUser = ({ name: string, class: number, email: string}) => {};
var newUser = function (_a) {
    var string = _a.name, number = _a.class;
};
createUser({ name: "aditya", class: 2 });
function createUserClass(user) {
    return user;
}
createUserClass({ name: "", class: 0, email: "" });
function createId(u) { }
var myUser = {
    id: "12",
    name: "adi",
    class: 12,
    email: "aditya@com",
};
