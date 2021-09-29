console.log(`TESTING`);

// ? declaring variable 

let taskList = document.getElementById(`taskList`)
let completeList = document.getElementById(`completeList`)
let asapNewTask = document.getElementById(`asapNewTask`)


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
    newTaskDate.innerHTML = dateNewTask

    newTaskTime = document.createElement(`h4`)
    newTaskTime.classList.add("task-time")
    newTaskTime.innerHTML = timeNewTask

    // ? create .important h5
    newImportant = document.createElement(`h5`)
    newImportant.classList.add("important")
    if (important) {
        newImportant.innerHTML = "important"
    }

    // ? create new .task-button div
    newTaskButton = document.createElement(`div`)
    newTaskButton.classList.add("task-button")

    // ? create new edit and trash button
    newEditBtn = document.createElement(`i`)
    newEditBtn.classList.add("far")
    newEditBtn.classList.add("fa-edit")
    newTrashBtn = document.createElement(`i`)
    newTrashBtn.classList.add("far")
    newTrashBtn.classList.add("fa-trash-alt")
    newTrashBtn.onclick = deleteTask



    // ? insertion
    newDateTimeArea.append(newTaskDate, newTaskTime)
    newTaskInfo.append(newTaskName, newDateTimeArea, newImportant)
    newTaskButton.append(newEditBtn, newTrashBtn)
    newListHolder.append(newFinishCheck, newTaskInfo, newTaskButton)
    taskList.append(newListHolder)

    console.log(" ");

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
}

function deleteTask() {
    console.log(`DELETED`);
    listNode = this.parentNode.parentNode
    console.log(listNode);
    listNode.remove()
}