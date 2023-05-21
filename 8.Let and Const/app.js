// console.log(a);  //ERROR
let a = 10;

// console.log(b);  ERROR
// const b = 100;
//We don't acces 'a' & 'b' before initialization because we used let & const
//Because it not stored in global space.It stored in seperate memory space like script.

// console.log(c);//undefined
var c = 1000;
//Because var is hosted in global spcae,we can access it,without any error.


//TEMPORAL DEAD ZONE
//It is a time since let & const are hosted and till,it not initalized some value.



//Let & Const declaration are hoisted but due to temporal dead zone
//we not access it.


// let b;     //Correct
// Const d;  //Error beacuse const is more strict than let,