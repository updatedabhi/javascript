const todoList = [];

function todoListHTMLTag() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const html = todoList[i];
    todoListHTML += `<p>${html}</p>`;
  }
  document.querySelector('.js-todoList-text').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';
  todoListHTMLTag();
}

function pressEnter(event) {
  const keyCode = event.keyCode || event.which;
  if (keyCode === 13) {
    addTodo();
  }
}
