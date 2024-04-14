"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    return num + 2;
}
add(7);
var loginUser = function (email, pass, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
loginUser("a", "true");
//defining returm type of function
function addTwo(num) {
    return num + 2;
    // return "hello";
}
addTwo(3);
//defining returm type of arrow function
var trimString = function (str) {
    return "this is " + str;
};
trimString("life");
//map Function
var heroes = ["bstmsn", "ironmsn", "supersman"];
heroes.map(function (hero) {
    return "this is ".concat(hero);
    //     return 1;
});
function consoleError(error) {
    console.log(error);
    //  return 'error';
}
function handelError(error) {
    throw new Error(error);
}
