// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   let form = document.querySelector('form');
//   form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     workToDo(e.target.new-task-description.value)
//     form.reset()
//   })
// })

// function workToDo(todo) {
//   let p = document.createElement('li')
//   let btn = document.createElement('button')
//   btn.addEventListener('click', liDelete)
//   btn.textContent = 'x'
//   p.textContent = `${todo} `
//   p.appendChild(btn)
//   document.querySelector('tasks').appendChild(p)
// }


// function liDelete(e){
//   e.target.parentNode.remove()
// }





// Stage 1
// [x] Get the form 
// [x] Attach an event listener to the form
// [x] Get the task from the input
// [x] Display the data

// Stage 2
// [x]Add a delete button

// Stage 3 
// [x]Select a priority level for task before submitting
// [x]Change color of task according to the priority level

// 


document.addEventListener("DOMContentLoaded", () => {
  addEventListeners()
});

// get the form and add an event listener
function addEventListeners() {
  document.getElementById("create-task-form").addEventListener("submit", handleFormSubmit)
}

function handleFormSubmit(e) {
  e.preventDefault()
  // console.log(e)
  const task = e.target[0].value
  const priorityLevel = parseInt(e.target.priority.value)

  displayTask(task, priorityLevel)
}

function displayTask(task, priorityLevel) {
  const taskUl = document.getElementById("tasks");
  const taskLi = document.createElement("li");
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "x"
  deleteBtn.addEventListener("click", deleteTask)

  taskLi.textContent = task + " ";
  taskLi.style.color = getPriorityColor(priorityLevel)
  taskLi.appendChild(deleteBtn)
  taskUl.appendChild(taskLi);
}

function deleteTask(e){
  console.log(e)
  e.target.parentNode.remove()
}

function getPriorityColor(priorityLevel) {
  if (priorityLevel === 1) {
    return "red"
  } else if (priorityLevel === 2) {
    return "yellow"
  } else {
    return "green"
  }
}