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


