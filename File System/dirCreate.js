var fs = require("fs");

fs.mkdir('input',(err)=>{
    if(err) return console.log(err);
    console.log('Directory Created');
})