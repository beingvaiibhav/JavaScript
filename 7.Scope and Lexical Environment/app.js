//1
// function a(){
//     console.log(b); //10
// }
// var b = 10;
// a();

//2
// function a(){
//     c();
//     function c(){
//         console.log(b); //10
//     }
// }
// var b = 10;
// a();

//3
// function a(){
//     var b = 10;   
// }
// a();
// console.log(b); //b is not defined error

//4
// function a(){
//     b()
//     function b(){
//         c()
//         function c(){
//             console.log(name)
//         }
//     }
// }
// var name = "vaibhav"
// a();

//This is Called Scope : where you can access specifiv varaible or a function in 
//our code

