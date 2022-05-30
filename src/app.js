function addNewItem(inputTask) {
  let taskList = document.querySelector("#tasks");
  let arrLength = taskArray.push(inputTask);
  console.log(arrLength);
  console.log(taskArray[arrLength - 1]);
  taskList.innerHTML += `<li>${
    taskArray[arrLength - 1]
  } <button id="done-btn">Done</button>
  <button id="remove-btn">🗑️</button></li> `;
}

function enterTaskToList(event) {
  event.preventDefault();
  let inputTask = document.querySelector("#input-text").value;
  addNewItem(inputTask);
  document.getElementById("input-form").reset();
}

let taskArray = [];

let button = document.querySelector("#submit-button");
button.addEventListener("click", enterTaskToList);
