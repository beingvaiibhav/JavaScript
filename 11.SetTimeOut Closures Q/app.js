// function x(){
//     var i =1;
//     setTimeout(function(){
//         console.log(i)
//     },3000);
//     console.log("JS NOT WAIT FOR ANYONE")
// }
// x()

// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i)
//         }, i*1000);
//     }
    
//     console.log("JS NOT WAIT FOR ANYONE")
// }
// x()

//WHAT IF INTERVIWER ASKED TO DON'T FIXED WITH LET USE VAR 
function x(){
    for(let i=1;i<=5;i++){
        function close(x){
            setTimeout(function(){
                console.log(x)
            }, x*1000);
        }
        close(i)
    }
    
    console.log("JS NOT WAIT FOR ANYONE")
}
x()