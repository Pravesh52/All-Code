// let arr=[1,2,-3,4,5]
// let k=3
// let n=arr.length
// console.log(n);

// let maxsum=0
// for(let i=0;i<=n-k;i++)
// {
//     let cur
// }

// array are 3 number are plus and find maximum sum

// let wsum=0
// for(let i=0;i<k;i++)
// {
//     wsum+=arr[i]
// }   
// let maxsum=wsum

// for(let i=k;i<n;i++)
// {
//     wsum=wsum+arr[i]-arr[i-k]

//     if(wsum>maxsum)
//     {
//         maxsum=wsum
//     }
// }
// console.log(maxsum)


// let p1=new Promise((res,rej)=>{
//     res()
// })
// let p2= new Promise((res,rej)=>{
//     rej()
// })

// import a from './home.js'
// import{firstName}from './home.js'

// console.log(a);
// console.log(firstName);

let arr=[32,4,2,5,2,8,7]

let data= arr.sort((a,b)=>{
    return a-b
    
})
console.log(data);
