let mongoose=require('mongoose')

let uploadSchema = mongoose.Schema({
    name:{
        type:String
    },
    imgUrl:{
        type:String,
        required:true

    },
    likeCount:{
        type:Number,
        default:0
    }
})
 
 let Upload=mongoose.model('Upload',uploadSchema)

 module.exports=Upload 