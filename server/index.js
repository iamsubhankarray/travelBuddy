import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import members from "./model.js"
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://iamsubhankarray:GKGbuQiANH8Ck986@cluster0.nvqbu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/users")
.then(console.log("db connected"))
.catch(err=>console.log("db connection failed",err))

app.get('/',(req,res)=>{
    res.send('<h1>welcome to home page</h1>')

})
app.post("/login",async(req,res)=>{
   const  {name,email,password}=req.body
   await members.create({
    name,
    email,
    password,


   })
   res.send("success")
   console.log(req.body)}

)

app.listen(3000,()=>{
    console.log("server running on 8080");
    
})