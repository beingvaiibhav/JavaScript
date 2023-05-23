//1
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

//2
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// let z = x();
// console.log(z)   //ƒ y(){
                //     console.log(a);
               // }
// z()


//OTHER CASES
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     a =100;
//     return y;
// }
// let z = x();
//  z() //100


 function z(){
    var b = 900;
    function x(){
        var a=7;
        function y(){
            console.log(a,b);
        }
        y()
    }
    x()   
 }
 z() 

