const User = {
  name: "aditya",
  class: 3,
  email: "adityasongh@gmail.com",
};

// :{}  function type obj

let createUser = ({ name: string, class: number }): {} => {
  return {};
};

// let newUser = ({ name: string, class: number, email: string}) => {};
let newUser = ({ name: string, class: number }) => {};

createUser({ name: "aditya", class: 2 });

// let newUser = { name: "aditya", class: 3, email: "adityasongh@gmail.com" };
// createUser({ name: "aditya", class: 3, email: "adityasongh@gmail.com" });
// createUser(newUser);

// crated a custom type

type userClass = {
  name: string;
  class: number;
  email: string;
};

function createUserClass(user: userClass): userClass {
  return user;
}

createUserClass({ name: "", class: 0, email: "" });

type userId = {
  readonly id: string;
  name: string;
  class: number;
  email: string;
  creditCard?:number
  //   creditCard?  optional "?"
};

function createId(u: userId) {}

let myUser: userId = {
  id: "12",
  name: "adi",
  class: 12,
  email: "aditya@com",
};

// myUser.id = 12  can't chnage is read only

type cardDetails = {
    cardDate: string
}

type cardDates = {
    cardDetailas:number
}

type card = cardDetails & cardDates & {
    cvv: number
}

export {};
