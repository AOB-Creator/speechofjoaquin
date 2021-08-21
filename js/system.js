const menus = document.querySelectorAll(".menus li");
menus.forEach(item=>{
    item.addEventListener("click", ()=>{
        removerclass()
        item.classList.add("active")
    })
  
})

removerclass= function(){
    menus.forEach(each=>{
        each.classList.remove("active")
    })
}
// const about1 = document.getElementById("about")
// if(about1.className()==="active"){

// }

const lies = document.querySelectorAll(".uls2 li")
const pies = document.querySelectorAll(".uls2 p span:last-child")
pies.forEach(each=>{
    
    



})

lies.forEach(each=>{
    each.setAttribute("style",`width:${100}% !important`);
})


const btns7 = document.querySelectorAll(".btns7 button");
  erasebtn = function(){
        btns7.forEach(each=>{
            each.classList.remove("activebtn")
        })
 }
 btns7.forEach(eac=>{
     eac.addEventListener("click", ()=>{
         erasebtn()
        eac.classList.add("activebtn")
        const img7 = document.querySelectorAll(".img7 img")
        img7.forEach(each=>{
            if(eac.id=="all"){
                if(each.getAttribute("data-target")=="all"){
                    each.classList.add("exist")
                }
            }else if(each.id=="app"){
                
            }   
        })
         
     })
 })



 const singup = document.querySelector(".sign-up")
 const login = document.querySelector(".login")
 const membership = document.querySelector(".membership")

const datauser={
    email: "",
    password: ""
}


 if(localStorage.getItem("users")===null){
    singup.classList.remove("rmv")
    const email = document.querySelector("input#email")
    const password1 = document.querySelector("input#password")
    const password2 = document.querySelector("input#passworda")
    const submit = document.querySelector("button#submit")

    email.addEventListener("change", function(e){
        datauser.email = e.target.value
        
    })

    password1.addEventListener("change", (e)=>{
        let pass1 = e.target.value
    })
    password2.addEventListener("change", (e)=>{
        let pass2 = e.target.value;
    })

    submit.addEventListener("submit", (e)=>{
        
            datauser.password=pass2;
            console.log(datauser)
            localStorage.setItem("users", datauser)
        
    })
}
    

  else if(localStorage.getItem("users")!==null){
    login.classList.remove("rmv")
 }


















