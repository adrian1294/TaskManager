const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const filterInput = document.getElementById("filter");
const heading = document.querySelector("h5");
const addBtn = document.querySelector(".btn");
window.addEventListener("load", reload);
list = document.querySelector("ul.collection");
let taskList = new Array;

const clearTasks = document.getElementById("clearTask");

const bodyNode = document.body;
bodyNode.addEventListener('click', eventHandler);

function reload(){
    if(localStorage.taskList){
        taskList = JSON.parse(localStorage.taskList); 
        newUL(taskList);
    }else{

    }
}
function remove(){
    if(localStorage.taskList){
        taskList = JSON.parse(localStorage.taskList);
    }else{

    }
}
function eventHandler(e){
    if(e.target.parentElement.className==="delete-item secondary-content"){
        e.target.parentElement.parentElement.remove();
        let tList = taskList.indexOf(e.target.parentElement.parentElement
        .innerText);
        taskList.splice(tlist, 1);
        let stringObj = JSON.stringify(taskList);
        localStorage.setItem("Tasks", stringObj);
        e.preventDefault();
    }
}

form.addEventListener("submit", function(e){
    const newLi = document.createElement("li");
    newLi.className='collection-item';
    taskList.push(taskInput.value);
    stringObject = JSON.stringify(taskList);
    localStorage.setItem("taskList", stringObject);
    
    if(taskInput.value!==""){
    newLi.innerHTML= `${taskInput.value}<a href="#" class="delete-item secondary-content"><i class="fa fa-times"></i></a>`;
    list.appendChild(newLi);
    }else{
     alert("Please insert a Task!")
    }
    taskInput.value="";
    e.preventDefault();
});

clearTasks.addEventListener("click", function(){
  document.getElementById("collection").innerHTML="";
  localStorage.removeItem('taskList');
});

filterInput.addEventListener("keyup", function(e){
    
    let listCollection = document.querySelectorAll("li");
    listCollection.forEach((li,index)=>{
        if(li.innerText.search(filterInput.value)>-1){
            li.style.display = "";
        }else{
            li.style.display = "none";
        }
       
    })
});

function newUL(p1){
    list.innerHTML = "";
    p1.forEach((li, index)=>{
    const newLiLoad = document.createElement("li");
    newLiLoad.className='collection-item';
    newLiLoad.innerHTML= `${li}<a href="#" class="delete-item secondary-content"><i class="fa fa-times"></i></a>`;
    list.appendChild(newLiLoad);
    })
}



