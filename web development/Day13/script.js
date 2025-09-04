//Polyfills: A polyfill is a piece of code that adds modern JavaScript
// features to older browsers that don’t support them.

                //filter function made 
        // let arr=[1,2,3,4,5,6]
        // Array.prototype.myfilter=function(cb){
        //     let res=[]
        //     for (let i=0;i<this.length;i++)
        // {
        //     if(cb(this[i],i,this))
        // {
        //     res.push(this[i])
        //     //res.push(i)
        //     //res.push(this)
        // }
        // }
        // return res
        // }
        // let data=arr.myfilter((a,b,c)=>{
        //     return a%2==1
        // })
        // console.log(data);


//Synchronous and Asynchronous Program

//Synchronous: synchronous program is a code line by line excution
//Asynchronous: Asynchronous program is a code are use setTimeout function
//ex.
// console.log('start'); 
// setTimeout(function() { 
// console.log('run after 2 seconds'); 
// }, 2000); 
// setTimeout(function() { 
// console.log('run after 4 seconds'); 
// }, 4000); 
// console.log('end');



//insta algorithm

//call back function
function step1(next)
{
    setTimeout(()=>{
        console.log("Selected Photo✅");
        next()
    },4000)
}
function step2(next)
{
    setTimeout(()=>{
        console.log("caption❤️");
        next()
    },3000)
}
function step3(next)
{
    setTimeout(()=>{
        console.log("filter💕");
        next()
    },2000)
}
function step4()
{
    setTimeout(()=>{
        console.log("Post✅");
    },1000)
}

// step1()
// step2()
// step3()
// step4()

//call back function
//call back hell
step1(() => {
    step2(() => {
        step3(() => {
            step4();
        });
    });
});



