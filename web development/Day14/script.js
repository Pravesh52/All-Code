//insta algorithm

// Promises

//create a promise
// let promise = new Promise((res,rej)=>{
//     let a=true
//     if(a){
//         res()
//     }else{
//         rej()
//     }
// })



let step1=function (){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res()
            console.log("Photo Select ho gayi");
        },4000)
    })
}

let step2=function (){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res()
            console.log("caption");
        },3000)
    })
}


async function call(){
    await step1()
    await step2()
}
call()