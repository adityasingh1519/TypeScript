function add(num: number) {
  return num + 2;
}

add(7);

let loginUser = (email: string, pass: string, isPaid: boolean = true) => {};

loginUser("a", "true");

//defining returm type of function

function addTwo(num: number): number {
  return num + 2;
  // return "hello";
}

addTwo(3);

//defining returm type of arrow function

const trimString = (str: string): string => {
  return "this is " + str;
};
trimString("life");

//map Function

let heroes = ["bstmsn", "ironmsn", "supersman"];

heroes.map((hero): string => {
  return `this is ${hero}`;
  //     return 1;
});

function consoleError(error: string): void {
  console.log(error);
  //  return 'error';
}

// nrever is used when the function does't return a value it a  exception , value is never observed or the termination of execution program

function handelError(error: string): never {
  throw new Error(error);
}

export {};
