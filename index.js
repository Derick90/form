let name=document.getElementById("name")
let password=document.getElementById("password")
let form=document.getElementById("form")
let error=document.getElementById("error")
let confirmpassword=document.getElementById("Confirmpassword")
let value=document.getElementById("value")
form.addEventListener("submit" ,(e)=>{
    if(name.value ===''){
        e.preventDefault()
        error.innerHTML="enter your name";}
    if(password.value.length<=5){
        e.preventDefault()
        pass.innerHTML='short password';}
    if(confirmpassword.value!==password.value){
        e.preventDefault()
        pass.innerHTML='short password';}
    }
)

