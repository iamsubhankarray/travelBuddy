import mongoose from "mongoose";
const memberSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    photo:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:[true,"email already exists"]
    },
    password:{
        type:String,
        required:true,


    },
    travel:{
        type:Number,
        default:0,


    },
    accommodation:{
        type:Number,
        default:0,


    },
    food:{
        type:Number,
        default:0,


    },



},
{timestamps:true},

)
const members= mongoose.model("members",memberSchema)
export default members