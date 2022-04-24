//JS for to do list 

let task_item = document.querySelector('#task_input');
let submit = document.querySelector('#todo-btn');
let todoList = document.querySelector('#todo-list');
// let container = document.querySelector('.todo-container');
let chkBox = document.querySelector('.chkbox')

function newListItem (){
    if(task_item.value == ''){
        alert("please, enter a task");
        return;
    }
    // event.preventDefault();
    //create div
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li 
    let listItem = document.createElement('li');
    listItem.classList.add('list-item')
    //takes user input and puts into list 
    listItem.innerText = task_item.value;
    //adds checkbox 
    todoDiv.innerHTML = '<input type = checkbox class = chkbox>' 
    //adds trashcan 
    //appends list to div 
    todoDiv.appendChild(listItem);
    //appends div to unordered list 
    todoList.appendChild(todoDiv);
    task_item.value = '';
}

submit.addEventListener('click', newListItem);

//Come back later to add check box functionality, trash can functionality 
// function checkBox(){

//     let chkBox = document.querySelector('.chkbox')
//         if (chkBox.checked){
//             console.log("hi");
//         }
//     }

//     chkBox.addEventListener('click', checkBox);





