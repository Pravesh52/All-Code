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

let arr=['pravesh tiwari','ankit pal','pravesh','ankit']

app.get('/search',(req,res)=>{
    let{firstname,lastname}=req.query
    console.log(`firstname: ${firstname} lastname: ${lastname}`)
    res.send(`firstname: ${firstname} lastname: ${lastname}`)
})


app.listen(4000,()=>{
    console.log("server running on prt no 4000");
})