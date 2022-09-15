const fs=require('fs');

//Reading a file without a callback
console.log("Sync Function\n");
let data=fs.readFileSync('input.txt','utf-8')
console.log("Before printing function");
console.log(data);
console.log("After printing function");

//Reading a file using callback function
console.log("\nAsync Function\n");
console.log("Before printing function");
fs.readFile('input.txt','utf-8',(err,data)=>{
    if(err) return console.log(err);
    console.log(data);
})
console.log("After printing function");