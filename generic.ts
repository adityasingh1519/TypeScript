function identity<Type>(r: Type): Type {
  return r;
}

function identity1<T>(r: T): T {
  return r;
}

// can add custom type

interface bottle {
  brnad: string;
  type: number;
}
function  identity3<bottle> (val : bottle) : bottle {
    return val ;
}

function  identity4<T> (val : T[]) : T{
    return val[2] ;
}

//using arrow function

const arrow = <T>(v:T):T => { return v;}
// <T,> comma just to mention that it is a generic not a jsx tag or something else

function  identity5<T,> (val : T[]) : T{
    return val[2] ;
}


//If I enter string it  will give string
