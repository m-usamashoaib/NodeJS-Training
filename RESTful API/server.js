const express=require('express')
const fs= require('fs')
const app=express()

var user = {
    "user4" : {
       "name" : "Umer",
       "password" : "1234",
       "profession" : "MEAN Developer",
       "id": 4
    }
}

app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.get('/get-users',(req,res)=>{
    res.sendFile(__dirname+'/users.json',(err,data)=>{
        if(err) return console.error(err);
        console.log(data);
    })
})
app.get('/get-user/:id',(req,res)=>{
    fs.readFile(__dirname+'/users.json','utf-8',(err,data)=>{
        var users=JSON.parse(data);
        var user=users["user"+req.params.id]
        console.log(user);
        res.end(JSON.stringify(user))
    })
})

app.post('/add-user',(req,res)=>{
    fs.readFile(__dirname+'/users.json','utf-8',(err,data)=>{
        data=JSON.parse(data);
        data["user4"]=user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    })
})

app.delete('/delete-user/:id',(req,res)=>{
    fs.readFile(__dirname+'/users.json','utf-8',(err,data)=>{
        users=JSON.parse(data);
        delete users['user'+req.params.id]
        console.log(users)
        res.end(JSON.stringify(users))
    })
})

app.listen(8000,()=>{
    console.log('Server listening on port 8000');
})