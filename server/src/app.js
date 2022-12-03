require('dotenv').config()
const express =require("express")
const cors= require("cors")
const app = express()
const port= 5001
const allLocation =require("../module/schema")
app.use(express.json())
app.use(cors())

app.post("/addlocation",async(req,res)=>{

    const {locations}= req.body
    try{

        await allLocation.create({location:locations})
    }
    catch(err){
        res.json({
            err
        })
    }
})

app.get("/getlocation",async(req,res)=>{
    try{
        sort = {'timestamp': -1}
     const data= await allLocation.find({}, limit=1).sort(sort)
        console.log(data)
    }
    catch(err){
        res.json({
            err
        })
    }
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})