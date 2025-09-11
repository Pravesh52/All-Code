// let form1=document.querySelector("#form1")
// let form2=document.querySelector("#form2")
// // let signup=document.querySelector('signup')
// // let login=document.querySelector('login')
// form1.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     let data={
//         name:form[0].value,
//         father:form[1].value,
//         age:form[2].value,
//         email:form[3].value,
//         pass:form[4].value,
//     }
//     console.log(data);
//     localStorage.setItem("formData",JSON.stringify(data))
    
// })

// form2.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     let saveData=localStorage.getItem("formData")
//     let dataobj=JSON.parse(saveData)

//     let loginobj={
//         email:form[0].value,
//         pass:form[1].value
//     }

//     if(dataobj.email==loginobj.email && dataobj.pass==loginobj.pass){
//         prompt("login donee")
//     }else{
//         prompt("errrr")
//     }
// })

let inp=document.querySelector('input')
let btn=document.querySelector('button')
let ul=document.querySelector('ul')
let del=document.querySelector('Delete')


btn.addEventListener("click",()=>{
    let data=inp.value
    let li=document.createElement("li")
    li.innerText=data
    ul.append(li)
    inp.value=" "
    li.addEventListener("click",()=>{
        li.remove()
    })
})

