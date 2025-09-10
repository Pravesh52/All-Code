// console.log("hello");
//1st kind of event apply

// let btn=document.querySelector("button")
// let body=document.querySelector("body")

// btn.onclick=function(){
//     // console.log("Hello");
//     body.style.backgroundColor="red"



// }

// let inp=document.querySelector("input")
// let h2=document.querySelector("h2")

// inp.addEventListener("input",(e)=>{
//     // console.log(e.target.value);
//     h2.innerText=e.target.value
// })


let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let data={
        name:form[0].value,
        father:form[1].value,
        age:form[2].value,
        email:form[3].value,
        pass:form[4].value,
    }
    console.log(data);
    //localStorage.setItem("formData",JSON.stringify(data))
    localStorage.removeItem("formData")
    // console.log(form[0].value)
    // console.log(form[1].value)
    // console.log(form[2].value)
    // console.log(form[3].value)
    // console.log(form[4].value)
    // console.log(form[5].value)
})

