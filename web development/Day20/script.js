
// let arr=[1,2,-3,4,-5,-3,5]
// let max=arr[0]

// const { createElement } = require("react");

// function sum(){

// for(let i=1;i<arr.length;i++)
// {
//     if(arr[i]>max)
//     {
//         max=arr[i]
//     }
    
// }
// console.log(max);
// }
// sum()


//object Distructring

// let obj={
//    id:1,
//    name:"jain",
//    lastName:"pravesh"
// }
// let {id,nam}=obj
// console.log(id);

// const person = {
//   name: "Pravesh",
//   age: 22,
//   city: "Bhopal"
// };

// // Normal way
// const name1 = person.name;
// const age1 = person.age;

// // Destructuring way
// const { name, age, city } = person;

// console.log(name); // Pravesh
// console.log(age);  // 22
// console.log(city); // Bhopal


//Api 

let ul= document.querySelector("ul")
fetch("https://jsonplaceholder.typicode.com/todos").
 then((data)=>{
    return data.json()
 }).then((res)=>{
    console.log(res);
    show(res)
 })



 function show(res){
    for(let i of res){
      let li =  document.createElement("li")
       let h4 =  document.createElement("h4")
    li.innerText=i.id
    h4.innerText=i.title
    
    ul.append(li,h4)
    }
 }
