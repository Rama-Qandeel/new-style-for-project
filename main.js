const div=document.querySelector(".change");
const button_white = document.querySelector(".button_white");
const button_black = document.querySelector(".button_black");
const input= document.querySelector("#input")
const todos = document.querySelector(".todos");
const tasklist=document.querySelector("#task")
const save=document.querySelector(".save")
const body=document.querySelector("body")

//************************************** */
const renderTime=function()
{
    const date=new Date()
   String= date.toDateString().split(" ")
 
   String[1]=date.getMonth()
    const viewDate=document.createElement("div")
    viewDate.innerText=String.join(",");
    viewDate.setAttribute("style", "color:white ;padding: 5px 7px;");
    div.append(viewDate)
}
//*********************************************** */
const white_btn=function(){
    button_white.addEventListener('click', function(){
        // document.documentElement.style.setProperty("background-color", '#fff')
        document.body.style.background ="#fff";
        document.body.style.color ="#000";

        })}
    
    //********************************************* */
    const black_btn=function(){
     button_black.addEventListener('click', function(){
        // document.documentElement.style.setProperty("background-color", '#2B292E')
        document.body.style.background ="#2B292E";
        document.body.style.color ="#fff";

    })} 
    //********************************************* */
 const arrayToDo=[]
const add=function(){
const newTodo=input.value
// console.log(newtodo)
if (newTodo == "") {
    window.alert("You must enter a value in the New Todo field.");
}
else{
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    tasklist.append(checkbox)
arrayToDo.push(newTodo)
renderList(newTodo)
// if (!arrayToDo.length<1){
//     console.log(arrayToDo)
// arrayToDo.forEach((elem,i)=>{
//     renderList(elem)})
//     console.log(arrayToDo)
// }
// viewList(newTodo)
}
input.value = ''; // Clear input

}
//****************************************************** */
const renderList=function(newTodo){
    console.log(newTodo)
 const li=document.createElement("li")
 li.classList.add('list-item')
 li.innerText=newTodo;    
 const removeButton=document.createElement("button")
 removeButton.innerText= "remove"
 removeButton.className=
 removeButton.addEventListener("click", function(){ 
 li.remove(); });
const button1=document.createElement("button")
button1.innerText= "reminder"
button1.className=
button1.addEventListener("click", alarm)
 li.append(removeButton);
 li.append(button1);
 tasklist.append(li);
}

//*********************************************** */
const alarm=function(date){
}
//******************************************** */

let signout=false
const sign=function(){
    
       if(!signout){
           window.location.href = "http://127.0.0.1:5500/indexlogin.html";
     signout=true
       }
   }
 //*************************************** */
   const getData=function(){
    const storedInput=JSON.parse(localStorage.getItem('items'))//get data from localstor
    
    if (storedInput) {
        tasklist.innerHTML=storedInput
      } else {
        items = []
      }
    }
    getData()
//**************************************** */
 const deleteList=function(){
    localStorage.clear()
     tasklist.remove()
}
//*************************************** */
const saveList=function(){
    localStorage.setItem('items', JSON.stringify(tasklist.innerHTML));//convert a data array to a string and save data to localsto

}
save.addEventListener('click',saveList)
//************************************************** */