//BLOCKSCOPE
// {
//     var a=10;
//     let b=20;
//     const c=30;

//     console.log(a) //10
//     console.log(b) //20
//     console.log(c) //30
// }
// console.log(a) //10
// console.log(b) //not defined
// console.log(c) //not defined

//We can't access let & const outside the block that's why is knowns as let & const are 
//blockScope.
//But we can access var because it is in global space.



//SHADOWING
var a = 100;
let b = 50;
const c = 60;
{
    var a=10;
    let b=20;
    const c=30;

    console.log(a) //10
    console.log(b) //20
    console.log(c) //30
}
console.log(a) //10
console.log(b) //50
console.log(c) //60