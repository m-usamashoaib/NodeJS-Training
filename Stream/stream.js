const fs= require('fs');
const readFile=fs.createReadStream('stream.txt');
let readData='';

readFile.on('data',(chunk)=>{
    console.log("---New Stream---");
readData+=chunk;
});
readFile.on('end',()=>{
    console.log(readData);
});
readFile.on('error',(err)=>{
    console.log(err.stack);
});

const writeFile=fs.createWriteStream('output.txt')
var writeData='Data written through writeStream';

writeFile.write(writeData)
writeFile.end();

writeFile.on('finish',()=>{
    console.log('writing completed');
})
writeFile.on('error',(err)=>{
    console.log(err);
})

//Piping
const readPipe=fs.createReadStream('InputPipe.txt')
const writePipe=fs.createWriteStream('OutputPipe.txt')

readPipe.pipe(writePipe);