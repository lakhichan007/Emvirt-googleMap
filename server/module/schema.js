const mongoose=require("mongoose")

mongoose.connect(process.env.PORT)
.then(()=>{
    console.log("connected to mongodb")
})
.catch((err)=>{
    console.log(err)
})

const locationSchema=new mongoose.Schema({
    location:{type:Array}
    
},{ timestamps: true })

const allLocation=mongoose.model("Emvirt",locationSchema)

module.exports =allLocation