const users = [
    {firstname:"vaibhav",lastname:"dubey",age:"20"},
    {firstname:"vibhav",lastname:"dubey",age:"19"},
    {firstname:"dharmang",lastname:"dubey",age:"27"},
    {firstname:"kajal",lastname:"dubey",age:"25"}
];

//ADD FIRSTNAME AND LASTNAME: MAP
const output = users.map( x => x.firstname+x.lastname)
console.log(output)

//HOW MANY PEOPLE WITH PARTICULAR AGE: REDUCE
const age = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
},{})
console.log(age)

//CHANING OF MAP FILTER AND REDUCE
//AGE LESS THAN 25: FILTER
const ageLess25 = users.filter((X)=> X.age < 25).map((x)=>x.firstname+x.lastname);
console.log(ageLess25)
