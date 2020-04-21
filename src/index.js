document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // let submitButton = document.getElementById('submit-button');
  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', submit);
});

function submit(e) {
  e.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  let listItem = document.createElement('li');
  const tasks = document.getElementById('tasks')
  listItem.innerText = newTaskDescription.value;
  tasks.appendChild(listItem);
  event.target.reset();
}

