var fs = require("fs");
var buff=Buffer(1024);

//Opening a file
fs.open('input.txt','r+',(err,fd)=>{
    if(err) return console.log(err);
    
    //Reading from a file
    fs.read(fd,buff,0,buff.length,0,(err,fd)=>{
        if(err) return console.log(err);
        console.log(buff.slice(0,fd).toString());
    })

    //Closing a file
    fs.close(fd,(err)=>{
        if(err) return console.log(err);
        console.log('File Closed');
    })
    
})