const arr =  [5,1,3,2,6];

//DOUBLE THE ARRAY ELEMENT
function double(x){
    return x*2;
}
//triple THE ARRAY ELEMENT
function triple(x){
    return x*3;
}
//BINARY OF ARRAY ELEMENT
function binary(x){
    return x.toString(2);
}




const output = arr.map(binary)
console.log(output)
