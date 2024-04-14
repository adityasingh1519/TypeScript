var message = 22;
message = "this is mstring";
var Aditya = { userName: "aditya15", id: 2009 };
// function getUserId(id: number | string) {
//    id.toLowerCase() 
// }
// id could be string also So It send error omn using functon that are only for string or for number
function getUserId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}
//array 
// let data1 : string[] | number[] = ['1' , 2]
// this  shoes an error  it means the array can Be  either of string or either of number separately
var data = ['adi', 2];
var pi;
// pi = 2;  throws error
pi = 3.14;
// now the pi an only be assigned 3.14
var category;
// category = 'tn' ;
category = "Obc";
