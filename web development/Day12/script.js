// for(let i=1;i<=5;i++)
// {
//     setTimeout(()=>{
//         console.log(i);
//     },1000*i)
// }

// const { useCallback } = require("react")

// for(var i=1;i<=5;i++)
// {
//     function x(i)
//     {
//         setTimeout(()=>{
//         console.log(i);
//       },1000*i)
//    }
//    x(i);
// }

// a=5
// console.log(a);
// console.log(window);

// console.log(this.a);

// a=5
// let obj={
//     id:1,
//     a:10,
//     name:"hello",
//     sum:()=>{
//         console.log(this.a);
//     }
// }
// sum();



//Prototype in js example

// function Car(make, model) {
//   this.make = make;
//   this.model = model;
// }

// // Add a method to the Car's prototype
// Car.prototype.drive = function() {
//   console.log(`Driving the ${this.make} ${this.model}.`);
// };

// const myCar = new Car("Toyota", "Camry");
// const anotherCar = new Car("Honda", "Civic");

// myCar.drive(); 
// anotherCar.drive(); 

// let arr=[1,2,3]
// console.log(Array.prototype);

//create a map function directly in used of map function
let arr=[1,2,3]
Array.prototype.ankit=function(Callback){
    let res=[]
    for(let i=0;i<this.length;i++)
    {
        res.push(Callback(this[i],i))
        // if(Callback(this[i],i,this))
        // {
        //     res.push(this[i])
        // }
    }
    return res
}
   let data= arr.ankit((a,b,c)=>{
      return c
   })


