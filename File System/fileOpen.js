var fs = require("fs");

//Opening File
console.log("Opening a file");
fs.open('input.txt',(err, fd)=> {
   if (err) {
      return console.error(err);
   }
   console.log("File opened");     
});