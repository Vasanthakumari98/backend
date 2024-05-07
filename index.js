const express=require("express")
const cors=require("cors")
const mongoose=require('mongoose')


const app=express()
app.use(cors())
app.use(express.json())

const PORT= process.env.PORT||4545


//schema
const schemaData=mongoose.Schema({
    name : String,
    email : String,
    mobile : Number,
    sex:String,
    address:String,
    Dob:String,
    salary:Number,
    Company:String,
    Current_Ctc:String,
    Expected_Ctc:String

},{
    timestamps:true
})
const userModel=mongoose.model("user",schemaData)



//read
// http://localhost:8080​
app.get("/",async(req,res)=>{
    const data=await userModel.find({})
    res.json({sucess:true, data:data})
})

//create data || save data in mongodb
http://localhost:8080​/create


app.post("/create",async(req,res)=>{
    console.log(req.body)
const data=new userModel(req.body)
await data.save()

    res.send({sucess:true,message :"data save sucessfully" ,data : data})
})
//update data ||put data in mongodb
// http://localhost:8080​/update
app.put("/update",async(req,res)=>{
    console.log(req.body)

    const {id,...rest} = req.body

    console.log(rest)
    const data = await userModel.updateOne({ _id : id},rest)
 
    res.send({success :true, message:"data update sucessfully", data : data})
})
//delete/delete with mongodb
// http://localhost:8080​/65f894b982d55a107798972c
app.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    console.log(id)
    const data=await userModel.deleteOne({_id:id})
    res.send({success :true, message:"data delete sucessfully", data :data})
})

mongoose.connect("mongodb+srv://admin:admin@cluster0.zzlvikn.mongodb.net/vasantha")
.then(()=>{

    console.log("connect to DB")
    app.listen(PORT,()=>console.log("server is running"))
})
.catch((err)=>console.log(err))





