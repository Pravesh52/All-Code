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

   let User=    require('./user')
   let bcrypt=    require('bcrypt')


//    npm i mongoose
// npm i bcrypt

 let app=     express()
 app.use(express.json())
 mongoose.connect("mongodb://127.0.0.1:27017/5thSem").
 then(()=>{
    console.log("db conneted...");
    
 })


 app.get('/',(req,res)=>{
    res.send("hiii")

 })
 
 //signup
 app.post('/create',  async(req,res)=>{
          let {userName,email,passWord}=   req.body
      console.log(userName,email ,"heheh");
      
     let user=     await  User.findOne({email})
   //   console.log(user,"hiiii");
     
     if(user){
        res.send("user jinda haiii")
     }else{
      let updatedP=     await  bcrypt.hash(passWord,10)
         console.log(updatedP,"HEH");
         
        let userData=   new  User({
            userName,
            email,
            passWord:updatedP
         })
              await userData.save()
              res.send("account ban gya hai....")
            //   console.log(userName,email, passWord);
     }
         
 })

 //login method
 app.post("/login",async(req,res)=>{
    let {email,passWord}=   req.body


       let userInfo=    await User.findOne({email})
       console.log(userInfo,"kyaa milegaaaaaaaa");
       
       if(!userInfo){
         res.send("user not found")
       }else{
        let validPass=   await bcrypt.compare(passWord,userInfo.passWord,)
        if(validPass){
         res.send("login ho gyaa")
        }else{
         res.send("pass sahi nhi haiiii")
        }
       }
         

 })
  
 app.listen(4000,()=>{
    console.log("server running on port no 4000");
    
 })

 //m