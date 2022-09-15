var fs = require("fs");

//Writing File
fs.writeFile('input.txt','Hello World',(err,fd)=>{
    if(err) return console.log(err);
    console.log("Written in file")
})