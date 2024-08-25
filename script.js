let addBtn = document.getElementById("enter");
let newInputTask = document.querySelector(".task");
let tasksContainer = document.querySelector(".to-do-list");

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
            // taskCount = -1;
            // displayCount(taskCount);
        };
    });

    //select all edit buttons and give them action to edit.
    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach(editBtn => {
        editBtn.onclick = () => {
            editBtn.parentNode.remove();
            // taskCount -= 1;
            // displayCount(taskCount);
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