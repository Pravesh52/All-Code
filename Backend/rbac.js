 let express= require('express')
   let mongoose=     require('mongoose')
let User=    require('./user')
let bcrypt=    require('bcrypt')
let jwt=    require('jsonwebtoken')



  mongoose.connect("mongodb://127.0.0.1:27017/5thSem").
  then(()=>{
   console.log("db....");
  })
  let app=     express()
  app.use(express.json())

//   app.use((req,res)=>{
//    res.send("mai hu idherr")

//   })
  app.get('/',(req,res)=>{
   res.send("hello")
   
  })
   app.post('/create',  async(req,res)=>{
          let {userName,email,passWord,role}=   req.body
      console.log(userName,email ,"heheh");
      
     let user=     await  User.findOne({email})
     console.log(user,"hiiii");
     
     if(user){
        res.send("user jinda haiii")
     }
         let updatedP=     await  bcrypt.hash(passWord,10)
         console.log(updatedP,"HEH");
         
        let userData=   new  User({
            userName,
            email,
            passWord:updatedP,
            role:role||'user'
         })
              await userData.save()
              res.send("account ban gya hai....")
            //   console.log(userName,email, passWord);
            
 })

  app.post("/login",async(req,res)=>{
    let {email,passWord}=   req.body
    console.log(email,passWord);
    
       let userInfo=    await User.findOne({email})
       console.log(userInfo,"kyaa milegaaaaaaaa");
       
       if(!userInfo){
         res.send("user not found")
       }else{
        let validPass=   await bcrypt.compare(passWord,userInfo.passWord,)
        if(validPass){
         let token = jwt.sign({  email: userInfo.email, role: userInfo.role }, "JHBFIUWBFIUWB");
         console.log(token,"tokennnnn");
         
         res.send("login ho gyaa")
        }else{
         res.send("pass sahi nhi haiiii")
        }
       }
        
 })

      
 function checkRole(role){
   return (req,res,next)=>{
      let token = req.headers.authorization;
      if (!token) {
         return res.send('Unauthorizeddd User ||');
     }else{
      let deCodedToken = jwt.verify(token,  "JHBFIUWBFIUWB");

      if (role!==deCodedToken.role) {
         return res.send('Access denieddd ||')
     }
     else {
         next();
     }

     }

   }
 }



  app.get('/public',(req,res)=>{
   res.send("isko koi bhi dekh sakta hai")

  })
  app.get('/private', checkRole('admin') , (req,res)=>{
   res.send("404......")

  })
  app.listen(4000,()=>{
   console.log("server running on port no 4000");
   
  })