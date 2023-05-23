// setTimeout(function(){
//     console.log("Timer")
// },5000)

// function x(y){
//     console.log("x")
//     y()
// }

// x(function y(){
//     console.log("y")
// })

function attachAddEventListener(){
    let count =0; //xyz Form Closures
    document.getElementById("clickme")
    .addEventListener("click",function xyz(){
        console.log("Button Clicked",++count)
    })
}

attachAddEventListener()

//INTERVIEW QUESTIONS
//Q.Garbage Collection & removeEventListner
//Answer: EventListner are heavy they consume memory
//even when are not running,they have to always take memory
//bacause when someone clicked ,they have to execute.
//This slowDown the Page.
//When we remove event listner all this variable which is
//hold me thier closure will be garbage collected