type User = {
  name: string;
  email: string;
};

type Admin = {
  name: string;
  email: string;
  IsAdmin: boolean;
};

// function isAdminAcc(v: User | Admin )
//   {
//     return v.IsAdmin
//   }

function isAdminAcc(v: User | Admin) {
  if ('IsAdmin' in v) {
    return v.IsAdmin
  }
  return false;
}

function logTime (v: Date | string) {
    if(v instanceof Date ) {
      return  console.log(v)
    }
    return v.toUpperCase() ;
}


type bird = {fly: () => void}
type Fish = {swim: () => void}

// function ifFish (pet: bird | Fish) {
//     return (pet as Fish) !== undefined ;
// }

function ifFish (pet: bird | Fish) : pet is Fish // let type script know if it returns true the pet is fish 
{
    return (pet as Fish) !== undefined ;
}

function getFood (pet: bird | Fish) {
      if (ifFish(pet)) {
       return  pet.swim();
      }
      return pet.fly;
    }



export {};
