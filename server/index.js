import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
// import members from "./model.js"
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    res.send('<h1>welcome to home page</h1>')

})
app.post("/login",(req,res)=>{
   const  {name,email,password}=req.body
   res.send("success")
   console.log(req.body)}

)

app.listen(3000,()=>{
    console.log("server running on 8080");
    
})