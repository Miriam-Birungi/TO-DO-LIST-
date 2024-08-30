let addBtn = document.getElementById("enter");
let newInputTask = document.querySelector(".task");
let tasksContainer = document.querySelector(".to-do-list");

//Function to add the tasks and store in local storage
const addTaskToLocal = (taskData = {}) => {
    let taskName = taskData.name || newInputTask.value.trim();

    //Store upated task in local Storage
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.push({name: taskName});
    localStorage.setItem("tasks",JSON.stringify(tasks));
};

//Function to retrieve the tasks from local storage.
function getTaskFromLocal(){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        addTask(task);
    });
}

//Function to update task and store in local storage.
function updateTask(taskId, newTaskName){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.map(task => {
        if (task.id === taskId){
            return { ...task, name: newTaskName};
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

//Function to delete task and store in local storage.
function deleteTask(taskId){
    const tasks = JSON.parse(localStorage.getItem(tasks)) || [];
    const updatedTasks = tasks.filter(task => task.id !== taskId);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

//Retrieve task on page reload from local storage.
getTaskFromLocal();

const addTask = () => {
    let taskName = newInputTask.value.trim();

    //add checkbox, edit icon and delete icon
    const tasks = `<div class="tasks">
    <input type="checkbox" class="task-check">
    <span class="taskname">${taskName}</span>
    <button class="edit">
    <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="delete">
    <i class="fa-solid fa-delete-left"></i>
    </button>
    </div> `;

    tasksContainer.insertAdjacentHTML("beforeend",tasks);

    //select all delete buttons and give them action to delete.
    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach(button => {
        button.onclick = () => {
            button.parentNode.remove();
        };
    });

    //select all edit buttons and give them action to edit.
    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach(editBtn => {
        editBtn.onclick = () => {
            editBtn.parentNode.remove();
        }    
    });

    //select all checkboxes
    const checkTask = document.querySelectorAll(".check-task");
    checkTask.forEach(checkbox => {
        checkbox.onChange = () => {
            checkbox.nextElementSibling.classList.toggle("completed");
        };
        
    });
   //make input field blank after adding a task.
    newInputTask.value = "";
};



//add event listener to add task button. 
addBtn.addEventListener("click", addTask);