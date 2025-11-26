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
    },
     user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",   // reference to user model
        required: true
    }],
    likedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
     }]
})
 
 let Upload=mongoose.model('Upload',uploadSchema)

 module.exports=Upload 