var express = require('express')
var app=express()
app.use(express.json())
var cors=require("cors")
app.use(cors())
app.use(express.urlencoded({extended:true}))
const mongoose = require('mongoose');



main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ajmathew');
  console.log("Connected and Running.....")
// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const formSchema =new mongoose.Schema({
    email : String,
    password :String
})
const Empinfo =mongoose.model('Empinfo',formSchema)
app.post('/reg',(req,res)=>{
    var email=req.body.eml
    var password=req.body.pss
    res.send({'msg':'success'})
    console.log(email+" "+password)
    
    const emp= new Empinfo({email:email,password:password})
    emp.save() //should we empty the variable everytime we enter the value
    
})
const stuSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    gender:String,
    course:String

})
const Stuinfo = mongoose.model('Stuinfo',stuSchema)
app.post('/stureg',(req,res)=>{
    var name=req.body.nam
    var email=req.body.eml
    var phone=req.body.phn
    var gender=req.body.gen
    var course=req.body.cose
    res.send({'msg':'success'})
    console.log(name+'\n'+email+'\n'+phone+'\n'+gender+course)
    const stu=new Stuinfo({name:name,email:email,phone:phone,gender:gender+"",course:course})
    stu.save()
})
app.listen(9000,()=>{
    console.log("server running http://localhost:9000/")
})

/*
app.post("/reg",(req,res)=>{
    var email=req.body.eml
    var password=req.body.pssw
})
*/

app.post('/reg',(req,res)=>{
    var email=req.body.eml
    var password=req.body.pss
})