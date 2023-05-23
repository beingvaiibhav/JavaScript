const arr = [5,1,3,2,6];

//1
//SUM OF ARRAY WITHOUT REDUCE FUNCTION
function findSum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}
console.log(findSum(arr))

//SUM OF ARRAY WITH REDUCE
const output = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0);
console.log(output)

//2
//MAX OF ARRAY WITH REDUCE
const maxArrayReduce = arr.reduce(function(arr,curr){
    if(curr > arr){
        arr = curr;
    }
    return arr;
},0);
console.log(maxArrayReduce)