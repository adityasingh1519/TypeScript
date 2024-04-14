let message: string | number = 22;

message = "this is mstring";

type user = {
  userId: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let Aditya: user | Admin = { userName: "aditya15", id: 2009 };


// function getUserId(id: number | string) {
//    id.toLowerCase() 
// }

// id could be string also So It send error omn using functon that are only for string or for number

function getUserId(id: number | string) {
     if (typeof id === 'string') {
        id.toLowerCase()
     }
 }

 //array 
// let data1 : string[] | number[] = ['1' , 2]
// this  shoes an error  it means the array can Be  either of string or either of number separately

 let data : (string | number)[] = ['adi' , 2];


 let pi:3.14;
 // pi = 2;  throws error
 pi = 3.14;

// now the pi an only be assigned 3.14


let category: "Sc" | "St" | "Obc" | 'Gn';

// category = 'tn' ;
category = "Obc";

export{}