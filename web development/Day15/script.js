//Dom

// get element by id is print by single form

// let h1= document.getElementById("one")
// h1.style.color="red"
// console.log(h1);

//get elements by class name is print by the array form

// let h1=document.getElementsByClassName("two")
// console.log(h1);

//query selector are print the only one element
//# are use by id and . are used class


// let h1=document.querySelector(".one")
// console.log(h1);

// let h1= document.getElementsByClassName("two")

// for(let i of h1)
// {
//     i.style.color='red'
// }

// let a =document.querySelector("a")
// a.getAttribute(a)
//console.log()

// let a=document.querySelector("a")
// a.setAttribute("href","http://flipkart.com")
// console.log()

// let h1=document.querySelector("#one")
// h1.innerText="hello"


// let img=document.querySelector("img")

// let image=[
// "https://images.unsplash.com/photo-1757137910091-1cf071030691?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
// "https://images.unsplash.com/photo-1757137910091-1cf071030691?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
// "https://images.unsplash.com/photo-1757137910091-1cf071030691?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
// "https://images.unsplash.com/photo-1757137910091-1cf071030691?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"
// ]
// // let num=0;

// // setInterval (function()
// // {
// //     num++;
// //     if(num>=image.length){
// //         num=0;
// //     }
// //     img.src=image[num];
// // },2000)


// let num=0;
// setInterval(function()
// {
//     image.setAttribute('src',arr[num]);
//     num=(num+1)%arr.length;
// },2000)


let body=document.querySelector("body")
function fun1(){
    body.style.backgroundColor="gray"
}
