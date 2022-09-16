console.log(__filename);
console.log(__dirname);


var printLoop=()=>{
    console.log("Inside Interval");
}
var print=()=>{
    console.log("Timeout");
    clearInterval(i)
}
var i=setInterval(printLoop,1000)
var t=setTimeout(print,3000)
