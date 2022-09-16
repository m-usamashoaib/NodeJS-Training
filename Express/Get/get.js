const express=require('express')
const app=express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/get.html')

})
app.get('/get-method',(req,res)=>{
    var response={
        first_name:req.query.first_name,
        last_name:req.query.last_name
    }
    console.log(response)
    res.end(JSON.stringify(response))
})
app.listen(8000,()=>{
    console.log('Server running at 8000');
})