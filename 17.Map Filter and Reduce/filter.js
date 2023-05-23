const arr = [5,1,3,2,6]

//FILTER ODD VALUES
function isOdd(x){
    return x%2;
}

//FILTER EVEN VALUES
function isEven(x){
    return x%2===0;
}
//FILTER GREATER THAN 4
function greaterThan4(x){
    return x>4;
}



const output = arr.filter(greaterThan4);
console.log(output)