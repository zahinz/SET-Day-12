console.log(`TEST`);

let taskList = document.getElementById(`taskList`)

let doneList = document.getElementById(`doneList`)

function newTask() {

    console.log(taskNew.value);
    
    // create single list div
    newListHolder = document.createElement(`div`)
    newListHolder.classList.add("single-list")

    // create p element
    newTaskText = document.createElement(`p`)
    newTaskText.innerHTML = taskNew.value


    // create new div for button
    newBtnDiv = document.createElement(`div`)


    // create edit buttons 
    newEditBtn = document.createElement(`button`)
    newEditBtn.innerHTML = `<i class="far fa-edit"></i>`
    newEditBtn.onclick = editTask


    // create delete buttons 
    newDeleteBtn = document.createElement(`button`)
    newDeleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`
    newDeleteBtn.onclick = deleteTask

    // create done buttons 
    newDoneBtn = document.createElement(`button`) 
    newDoneBtn.innerHTML = "Done"
    newDoneBtn.onclick = doneTask


    // insert the button inside newDivBtn
    newBtnDiv.append(newEditBtn)
    newBtnDiv.append(newDeleteBtn)
    newBtnDiv.append(newDoneBtn)

    newListHolder.append(newTaskText)
    newListHolder.append(newBtnDiv)

    taskList.append(newListHolder)

}


function deleteTask() {
    console.log(`I pressed delete button`);

    // ? two parent node because the buttons are insides two divs
    let taskNode = this.parentNode.parentNode;

    taskNode.remove()
}

function editTask() {
    console.log(`I pressed edit button`);
}


function doneTask() {
    console.log(`I pressed done button`);
}


