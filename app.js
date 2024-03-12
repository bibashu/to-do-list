let taskList = document.getElementById("taskList");

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value;

  if (taskText === "") {
    // alert("Vous devez définir une tache")
    return
  }
  let li = document.createElement("li");

  li.innerHTML = taskText;

  let editButton = document.createElement("Button");
  editButton.innerHTML = '<ion-icon name="pencil-outline"></ion-icon>';

  editButton.onclick = function () {
    editTask(li);
  };
  let barrButton = document.createElement("button")
  barrButton.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>';
  barrButton.onclick = function () {
    barreTask(li);
  };

  let deleteNutton = document.createElement("Button");

  deleteNutton.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
  deleteNutton.onclick = function () {
    deleteTask(li);
  };

  li.appendChild(editButton);
  li.appendChild(barrButton);
  li.appendChild(deleteNutton);

  taskList.appendChild(li);

  taskInput.value = "";
}

function editTask(task) {
  let taskTextElement = task.firstChild;
  let taskText = taskTextElement.textContent;

  let newTaskText = prompt("Modifier la tache:", taskText);
  if (newTaskText === null || newTaskText === "") {
    return;
  }

  taskTextElement.textContent = newTaskText;
}
function deleteTask(task) {
    taskList.removeChild(task)
}
function barreTask (task){
  if (task.style.textDecoration === 'line-through') {
    task.style.textDecoration = 'none'; // Retirer la barre de tâche si elle est déjà présente
  }
  else{
  task.style.textDecoration = 'line-through';
  }
}


