var fs = require("fs");

fs.rmdir('input',(err)=>{
    if(err) return console.log(err);
    console.log('Directory Removed');
})