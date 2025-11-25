let mongoose= require('mongoose')

let userSchema= mongoose.Schema({
    userName:{
        type:String

    },
    email:{
        type:String
    },
    passWord:{
        type:String
    },
    // role:{
    //     type:String,
    //     enum:['admin','student','instructor'],
    //     default:'student'
    // },
    fullName:{
         type:String
    },
    resetToken: String,
  resetTokenExpiry: Date,
}) 


   let User=   mongoose.model("User",userSchema)

   module.exports=User