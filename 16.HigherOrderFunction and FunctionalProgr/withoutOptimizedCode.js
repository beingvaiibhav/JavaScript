const radius = [3,1,2,4];

const areaOfCircle = function(radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
console.log(areaOfCircle(radius))

const circumferenceOfCircle = function(radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}
console.log(circumferenceOfCircle(radius))

const diameterOfCircle = function(radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(2 * radius[i]);
    }
    return output;
}
console.log(diameterOfCircle(radius))