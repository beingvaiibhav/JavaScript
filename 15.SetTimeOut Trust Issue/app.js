console.log("Start")
setInterval(function(){
    console.log("CallBack")
},5000)
console.log("end")

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate <startDate+10000){
    endDate = new Date().getTime();
}
console.log("While Expires")