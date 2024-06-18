const container = document.getElementById("container");

async function fetchApi() {
  const fetchData = await fetch("https://jsonplaceholder.typicode.com/todos/4");
  const toDos = await fetchData.json();

  return toDos;
}

function printTodo(object) {
  setTimeout(() => {
    console.log(object);
    const h2 = document.createElement("h2");
    h2.textContent = object.title;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = object.completed;

    container.appendChild(h2);
    container.appendChild(checkbox);
  }, 500);
}

fetchApi()
  .then((toDo) => printTodo(toDo))
  .catch((err) => {
    console.log(err, "el fetch falló");
  });
