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
 //npm init
 //npm i -g nodemon
 //npx nodemon start 


// let os=require('os')
// console.log(os.userInfo())


//  console.log(os.cpus())

let express=require('express')
let app=express()

app.use('/',(req,res)=>{
    res.send("mai hu don")
})

app.listen(4000,()=>{
    console.log("server running on prt no 4000");
})