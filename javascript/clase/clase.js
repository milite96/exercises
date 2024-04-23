async function fetchToDos() {
    const data = await fetch("ps://jsonplaceholder.typicode.com/todos")
    const toDos = await data.json()
    return toDos
}

fetchToDos()
.then((response) => console.log(response))
.catch((err) => {console.log(err, "el fetch falló")})