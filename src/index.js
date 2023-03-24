document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submit = document.querySelector("[type='submit']");
  submit.addEventListener('click', addTodo);

  const deleteButton = document.querySelectorAll("button");
  deleteButton.addEventListener('click', deleteTodo);

});


    //Here we are using the name property from the form to target the specific input.
function addTodo(e) {
  e.preventDefault();
  const formInput = document.getElementById("new-task-description");
  const todoTask = formInput.value.length > 0? formInput.value : breakTask;
  const ulElement = document.getElementById("tasks");
  const newTodo = document.createElement("li");
  newTodo.textContent = todoTask;
  ulElement.appendChild(newTodo);
  
  const newButton = document.createElement("button");
  newButton.textContent = "Delete";
  newTodo.append(newButton);
  
  e.target.reset();
};

 function deleteTodo(e) {
  e.preventDefault();
  const todelete = document.querySelectorAll("button");
  todelete.slice.call(elements, e.target.parentNode);
 };
