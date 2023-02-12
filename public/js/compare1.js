

const arrow = document.getElementById("arrow")
const header = document.getElementById("header")


arrow.addEventListener("click",()=>{
    const fromto = document.querySelector("#fromto")
    
    if(fromto.value === "right"){
        fromto.setAttribute("value","left") 
        arrow.setAttribute("src","/images/left.png") 
        header.innerHTML = "Send Money from User 2 Account to User 1 Account:"
    }
    else{
        fromto.setAttribute("value","right") 
        arrow.setAttribute("src","/images/right.png")
        header.innerHTML = "Send Money from User 1 Account to User 2 Account:" 
    }
   

})