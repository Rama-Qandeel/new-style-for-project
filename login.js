const user=document.querySelector(".username")
const pass=document.querySelector(".pass")

const login=function(){
   

const username=user.value;
console.log (username)
const password = pass.value;
console.log (password)
if (username === "rama" && password === "123") {
    // alert("You have successfully logged in.");
    // location.reload();
    window.location.href = "http://127.0.0.1:5500/index.html?";
} 
else if(username === "" && password === ""){
    alert( "Please enter uername and password") 

}
else {
  alert( "Please enter a valid username and password") 
}
}