//  console.log("hello")

//  let fs= require('fs')
//  //create the file
//  fs.writeFileSync('index.txt','Pravesh')
//  //file write in seen by file under txt
// let data = fs.readFileSync('index.txt')
//  console.log(data.toString());
//     //file me text insert ke liye
//  fs.appendFileSync("index.txt"," Tiwari")

//  fs.unlinkSync('index.txt')//file delete 
 //setexcution wala fir

 //server start karne ke liye command

 //npm init
 //npm i -g nodemon
 //npx nodemon start 


// let os=require('os')
// console.log(os.userInfo())


//  console.log(os.cpus())

// let express=require('express')
// let app=express()
// app.use(express.json())

// let arr=['cat','dog','cat','dog']
// app.get('/:ani',(req,res)=>{
//     let {ani}=req.params
//     let data=arr.filter((a)=>{
//         return a==ani
//     })
//     res.send(data)
// })


// app.use('/',(req,res)=>{
//     res.send("mai hu don")
// })

// let arr=['pravesh tiwari','ankit pal','pravesh','ankit']

// app.get('/search',(req,res)=>{
//     let{firstname,lastname}=req.query
//     console.log(`firstname: ${firstname} lastname: ${lastname}`)
//     res.send(`firstname: ${firstname} lastname: ${lastname}`)
// })

// app.post('data')


// app.listen(4000,()=>{
//     console.log("server running on prt no 4000");
// })
//npm i mongoose down load mongodb

let express=  require('express')
let mongoose=      require('mongoose')
let cors=require('cors')
   let User=    require('./user')
   let bcrypt=    require('bcrypt')

const sendOtp = require('./twillio')
const Otp=require('./Otp');//OTP MODEL
let jwt=    require('jsonwebtoken')
 

   //   let sendOtp=require('./twillio')


//    npm i mongoose
// npm i bcrypt

 let app=     express()
 app.use(cors())
 app.use(express.json())

 //Database connect karne ke liye
 mongoose.connect("mongodb://127.0.0.1:27017/5thSem").
then(()=>{
   console.log("db conneted...");
    
 })

 app.get('/',(req,res)=>{
   res.send("hello")
   
})
//  mongoose.connect("mongodb://127.0.0.1:27017/5thSem").
//  then(()=>{
//     console.log("db conneted...");
    
//  })


//  app.get('/',(req,res)=>{
//     res.send("hiii")

//  })
 
//  //signup
//  app.post('/create',  async(req,res)=>{
//           let {userName,email,passWord}=   req.body
//       console.log(userName,email ,"heheh");
      
//      let user=     await  User.findOne({email})
//    //   console.log(user,"hiiii");
     
//      if(user){
//         res.send("user jinda haiii")
//      }else{
//       let updatedP=     await  bcrypt.hash(passWord,10)
//          console.log(updatedP,"HEH");
         
//         let userData=   new  User({
//             userName,
//             email,
//             passWord:updatedP
//          })
//               await userData.save()
//               res.send("account ban gya hai....")
//             //   console.log(userName,email, passWord);
//      }
         
//  })

 

//  //login method
//  app.post("/login",async(req,res)=>{
//     let {email,passWord}=   req.body


//        let userInfo=    await User.findOne({email})
//        console.log(userInfo,"kyaa milegaaaaaaaa");
       
//        if(!userInfo){
//          res.send("user not found")
//        }else{
//         let validPass=   await bcrypt.compare(passWord,userInfo.passWord,)
//         if(validPass){
//          res.send("login ho gyaa")
//         }else{
//          res.send("pass sahi nhi haiiii")
//         }
//        }
         

//  })

//  app.post('/send-otp',async(req,res)=>{
//    const{phoneNumber}=req.body;
//    const otp=Math.floor(100000+Math.random()*900000).toString();
//    const expiresAt=new  Date(Date.now()+1*60*1000)
//    try{
//       // await sendOtp(phoneNumber,otp);
//       await sendOtp(phoneNumber, otp)
//       //save otp and phone nunber in the database 
//       const newOtp=new Otp({
//          phoneNumber,
//          otp,
//          expiresAt:expiresAt.toString(),
//       });
//       await newOtp.save();
//       res.status(200).send({message:'OTP SEND SUCCESSFULLY',otp});

//    }catch(error){
//       res.status(500).send({error:'failed to send otp'});
//    }
//  });

// app.post('/verify', async (req, res) => {
//   const { otp } = req.body;
//   console.log(Otp,"hehehehe");
  

//   try {

//     const otpRecord =       await Otp.findOne({ otp });

//     if (!otpRecord) {
//       return res.status(400).send({ error: 'Invalid OTP' });
//     }

//     const currentTime = new Date();
//     if (currentTime > otpRecord.expiresAt) {
//       return res.status(400).send({ error: 'OTP has expired' });
//     }


//     res.status(200).send({ message: 'OTP verified successfully' });


//     await Otp.deleteOne({ _id: otpRecord._id });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: 'Failed to verify OTP' });
//   }
// });

// Signup2 authentication on role user admin instructor option choose
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

//Login2

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
//check role

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

 //check role 
 
app.get('/public',(req,res)=>{
   res.send("isko koi bhi dekh sakta hai")

  })
  app.get('/private', checkRole('admin') , (req,res)=>{
   res.send("404......")

  })

  //forget password
const crypto = require('crypto');//reset email password
 let {sendEmail} = require('./sendEmail')

 app.post('/reset-password',async(req,res)=>{
   const{email}=req.body;
   try{
      const user=await User.findOne({email});
      if(!user){
         return res.status(404).send('user not found');
      }

      const resetToken=crypto.pseudoRandomBytes(20).toString('hex');
      user.resetToken=resetToken;
      user.resetTokenExpiry=Date.now()+3600000;
      await user.save();

      //  const resetUrl = `${req.protocol}://${req.get('host')}/reset-password/${resetToken}`;
      const resetUrl = `http://localhost:5173/reset/${resetToken}`;
    await sendEmail(
      user.email,
      'Password Reset Request',
      `Click the link below to reset your password:\n\n${resetUrl}`
    );

       res.status(200).send('Password reset email sent');

   } catch (error) {
    res.status(500).send('Error sending password reset email: ' + error.message);
   }
   
 });

 app.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() }, 
    });

    if (!user) {
      return res.status(400).send('Invalid or expired token');
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.passWord = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.status(200).send('Password reset successfully');
  } catch (error) {
    res.status(500).send('Error resetting password: ' + error.message);
  }
});

  
  
  
 app.listen(4000,()=>{
    console.log("server running on port no 4000");
    
 })

 //m