const express=require('express')
const app=express();
const bodyParser=require('body-parser')

var urlEncodedParser=bodyParser.urlencoded({extended: false})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/post.html')

})
app.post('/post-method',urlEncodedParser,(req,res)=>{
    var response={
        first_name:req.body.first_name,
        last_name:req.body.last_name
    }
    console.log(response)
    res.end(JSON.stringify(response))
})
app.listen(8000,()=>{
    console.log('Server running at 8000');
})