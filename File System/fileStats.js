var fs = require("fs");

fs.stat('input.txt',(err,stats)=>{
    if(err) return console.log(err);
    console.log(stats);
})