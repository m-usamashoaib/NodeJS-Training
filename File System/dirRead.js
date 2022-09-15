var fs = require("fs");

fs.readdir('input',(err,files)=>{
    if(err) return console.log(err);
    files.forEach(file => {
        console.log(file);
    });
})