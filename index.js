let todo=document.querySelector(".todo");
let add= document.querySelector(".btn-warning");
let editIcon=`<i class="fa-solid fa-pen-to-square"></i>`
let delIcon =`<i class="fa-solid fa-trash"></i>`
let list= document.querySelector('.todo-list')
let ul = document.querySelector(".todo-list ul");
let newDate= new Date();

// console.log(newDate.getFullYear());
function Add(){
    let input = document.querySelector(".form-control");
    let val=input.value.trim()
    if(val!=""){
        let li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = val +"  "+ " "+ newDate.getUTCFullYear();
        li.style.listStyle="none"
        li.style.margin='10px'
        
        let editBtn = document.createElement("span");
        editBtn.innerHTML = editIcon;
        editBtn.style.margin = "3px";
        editBtn.classList.add("edit-item");
        
        let deleteBtn = document.createElement("span");
        deleteBtn.innerHTML = delIcon;
        deleteBtn.style.margin = "3px";
        deleteBtn.classList.add("delete-item");

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        
        ul.appendChild(li);
        document.querySelector(".form-control").value = "";
        
       editBtn.addEventListener("click", function(){
        let newText = prompt("Enter new text for this task:",val);
        if (newText !== null && newText.trim() !== "") {
            
            li.innerHTML = newText.trim();
            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
        }
        
       })

       
    deleteBtn.addEventListener("click",function(){
      li.style.textDecoration="line-through"
  })
    }

   else{
    alert("inputu doldur")
   }
 
}


add.addEventListener("click", function(event) {
    event.preventDefault();
 Add() 
});


document.querySelector(".form-control").addEventListener("keypress", function(event){
  if(event.key==="Enter"){
    Add()
  }
})

let clear= document.querySelector(".btn-danger");
clear.addEventListener("click", function(event){
    event.preventDefault();
    if (confirm("Are you sure you want to clear the list?")) {
        let ul = document.querySelector(".list ul");
        document.querySelector(".todo-list ul").innerHTML = "";
    }  
})



let searchbtn = document.querySelector(".btn-info");
searchbtn.addEventListener("click", function () {
    let inpSearch = document.querySelector(".search").value.trim();
    let list = ul.querySelectorAll("li");
    list.forEach(function (li) {
        if (li.textContent.toLowerCase().includes(inpSearch.toLowerCase())) {
            li.style.display = "block";
        } else {
            li.style.display = "none";
        }
    })
    document.querySelector(".search").value = ""
  });

  // function descrip(){
  //   let descript= document.querySelector(".descript").value.trim();
  //   let li= document.createElement("li")
  //   ul.appendChild(li);
  //   li.textContent=descript
  //   document.querySelector(".descript").value="";
  //   console.log(descript);
  // }