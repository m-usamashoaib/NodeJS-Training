var fs = require("fs");

fs.unlink('input.txt',(err)=>{
    if(err) return console.log(err);
    console.log("File Deleted");
})