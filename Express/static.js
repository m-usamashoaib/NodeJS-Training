const express=require('express')
const app=express();

app.use(express.static('public'))


app.get('/',(req,res)=>{
    res.send("Hello Wolrd")
})
app.listen(8000,()=>{
    console.log('Server running at 8000');
})