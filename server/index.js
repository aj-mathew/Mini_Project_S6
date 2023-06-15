const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

var app= express()
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())

//mongoose code
app.listen(9000,()=>{
    console.log("server running http://localhost:9000/")
})

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ajmathew');
  console.log("Connected and Running.....")
// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//schema create
const formSchema =new mongoose.Schema({
    fullname : String,
    lastname : String,
    email : String,
    password :String
});
const formmodel =mongoose.model('user_tbl',formSchema)
//api for register
app.post('/reg',(req,res)=>{
    var fname=req.body.fname;
    var lname=req.body.lname;
    var eml=req.body.eml;
    var passw=req.body.passw;
    const table= new formmodel({fullname:fname,lastname:lname,email:eml,password:passw})
    table.save().then(()=>{
        res.send({"msg":"Registration successful"})
    })
    {/*res.send({'msg':'success'})
    console.log(email+" "+password)

    const emp= new Empinfo({email:email,password:password})
    emp.save() //should we empty the variable everytime we enter the value
*/}
})
const stuSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    gender:String,
    course:String

})
const ownermodel = mongoose.model('owner_tbl',formSchema)
app.post('/stureg',(req,res)=>{
    var fname=req.body.fname;
    var lname=req.body.lname;
    var eml=req.body.eml;
    var passw=req.body.passw;
   {/*} res.send({'msg':'success'})
console.log(name+'\n'+email+'\n'+phone+'\n'+gender+course)*/}
    const own=new ownermodel({fullname:fname,lastname:lname,email:eml,password:passw})
    own.save().then(()=>{
        res.send({"msg":"Registration successful"})
    })
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

app.post('/bookingform',(req,res)=>{
    var registrationnum=req.body.carRegistraion
    var owner=req.body.ownerName
    var ownernum=req.body.ownerNumber
    var date=req.body.bookingDate
    var stime=req.body.bookingStartTime
    var etime=req.body.bookingEndTime
    res.send({'msg':'success'})
    console.log(registrationnum+'\n'+owner+'\n'+ownernum+'\n'+date+'\n'+stime+'\n'+etime)
})