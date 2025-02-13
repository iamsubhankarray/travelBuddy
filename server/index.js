import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
// import members from "./model"
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send('<h1>welcome</h1>')

})
app.listen(8080,()=>{
    console.log("server running on 8080");
    
})