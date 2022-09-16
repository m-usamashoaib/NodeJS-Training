const http= require('http')
const fs= require('fs')
const url= require('url')

http.createServer((req,res)=>{
    console.log('server created');
    var pathname= url.parse(req.url).pathname;
    console.log(pathname+" is requested");

    fs.readFile(pathname.substr(1),(err,data)=>{
        if(err) 
        {
            console.log(err);
            res.writeHead(404,{'Content-Type':'text/html'});
        }else{
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data.toString())
        }
        res.end()
    })
}).listen(8000);

console.log('Server listening at port 8000');