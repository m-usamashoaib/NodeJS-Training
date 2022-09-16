const express=require('express')
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello")
})
app.get('/Home',(req,res)=>{
    res.send("Home Page")
})
app.get('/About',(req,res)=>{
    res.send("About Page")
})
app.post('/',(req,res)=>{
    res.send("Hello Wolrd")
})
app.delete('/',(req,res)=>{
    res.send("Hello Wolrd")
})
app.put('/',(req,res)=>{
    res.send("Hello Wolrd")
})
app.listen(8000,()=>{
    console.log('Server running at 8000');
})