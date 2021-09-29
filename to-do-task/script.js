console.log(`TESTING`);

// ? declaring variable 
let taskList = document.getElementById(`taskList`)
let completeList = document.getElementById(`completeList`)
let asapNewTask = document.getElementById(`asapNewTask`)
let newTaskItem = document.getElementById(`newTask`)
let taskListNumber = document.getElementById(`taskNumber`)


window.addEventListener("keydown", pressedKeyDown)

function pressedKeyDown(evt) {
    // console.log(evt);
    if (evt.code == "Enter") {
        newTask()
        newTaskItem.value = " "
    }
}


function newTask() {
    console.log(`New task created`);


    // ? check whether important is ticked or not
    important = asapNewTask.checked;
    console.log(important);

    // ? get the value from input
    // * new task
    newTaskList = document.getElementById(`newTask`)
    newTaskList = newTaskList.value;
    console.log(`task`, newTaskList);

    // *new date
    dateNewTask = document.getElementById(`dateNewTask`)
    dateNewTask = dateNewTask.value
    console.log(`date`,dateNewTask);
  

    // *new time
    timeNewTask = document.getElementById(`timeNewTask`)
    timeNewTask = timeNewTask.value
    console.log(`time`, timeNewTask);


    // ? create new .list-holder div
    newListHolder = document.createElement(`div`)
    newListHolder.classList.add("list-holder")

    // ? create new #taskFinished checkbox input
    newFinishCheck = document.createElement(`input`)
    newFinishCheck.setAttribute("type", "checkbox")
    newFinishCheck.setAttribute("id", "taskFinished")
    newFinishCheck.onclick = finishedTask

    // ? create new .task-info div
    newTaskInfo = document.createElement(`div`)
    newTaskInfo.classList.add("task-info")

    // ? create new .task-name h3
    newTaskName = document.createElement(`h3`)
    newTaskName.classList.add("task-name")
    newTaskName.innerHTML = newTaskList

    // ? create new date-time-area div
    newDateTimeArea = document.createElement(`div`)
    newDateTimeArea.classList.add("date-time-area")

    // ? create new .task-date .task-time h4
    newTaskDate = document.createElement(`h4`)
    newTaskDate.classList.add("task-date")
    
    if (dateNewTask !== "") {
        newTaskDate.innerHTML = dateNewTask
        console.log(`has date`);
    }
    else {
        newTaskDate.innerHTML = "Today"
        console.log(`has no date`, newTaskDate.innerHTML);
    }

    newTaskTime = document.createElement(`h4`)
    newTaskTime.classList.add("task-time")
    newTaskTime.innerHTML = timeNewTask

    // ? create .important h5
    newImportant = document.createElement(`div`)
    newImportant.classList.add("important")
    if (important) {
        newImportant.innerHTML = "⚡️ important"
    }

    // ? create new .task-button div
    newTaskButton = document.createElement(`div`)
    newTaskButton.classList.add("task-button")

    // ? create new edit and trash button
    newEditBtn = document.createElement(`i`)
    newEditBtn.classList.add("far")
    newEditBtn.classList.add("fa-edit")
    newEditBtn.onclick = editTask

    newTrashBtn = document.createElement(`i`)
    newTrashBtn.classList.add("far")
    newTrashBtn.classList.add("fa-trash-alt")
    newTrashBtn.onclick = deleteTask



    // ? insertion
    if (newTaskList !== "") {
    newDateTimeArea.append(newTaskDate, newTaskTime)

    if (important) {
    newTaskInfo.append(newTaskName, newDateTimeArea, newImportant)
    }
    else {
        newTaskInfo.append(newTaskName, newDateTimeArea)  
    }
    
    newTaskButton.append(newEditBtn, newTrashBtn)
    newListHolder.append(newFinishCheck, newTaskInfo, newTaskButton)
    taskList.append(newListHolder)

    newTaskItem.value = ""
    console.log(" ");
    }
    
    updateTask()

}


function finishedTask(event) {
    console.log(`FINISHED`);
    listNode = this.parentNode
    ticked = listNode.querySelector(`#taskFinished`).checked
    if (ticked) {
        completeList.append(listNode)
    }
    else {
        taskList.append(listNode)
    }
    
    updateTask()
}

function deleteTask() {
    console.log(`DELETED`);
    listNode = this.parentNode.parentNode
    console.log(listNode);
    listNode.remove()

    updateTask()

}

function editTask() {
    console.log(`EDIT`);
    listNode = this.parentNode.parentNode
    changedTask = prompt("Edit your task")
    listNode.querySelector(`.task-name`).innerHTML = changedTask
}

function updateTask() {
    // ? update the tasks counter
    let nodeTaskList = document.getElementById("taskList").childNodes
    taskNumber = nodeTaskList.length - 3;
    taskListNumber.innerHTML = taskNumber
}



