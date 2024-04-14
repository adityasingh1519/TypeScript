const enum SeatChoicer {    // if we add it will generate less code in js 
    Aisle = 10 ,   // ny default its value ods 0
    Middle,  // this will be 11 then But can be assign  custom value other wise it will follw the indinx of its upper value
    Window = 22,
    Forth // its value will be 23
     // If  I put  astring it needs to be defined for all 
}

enum SeatChoicer1 {
    Aisle = 'Aisle' ,   
    Middle = 'Middle',  
    Window = 0,
    Forth    // it will be 1
    
}


let seat = SeatChoicer.Aisle;