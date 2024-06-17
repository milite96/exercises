async function fetchApi(){
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/todos")
    const toDos = await fetchData.json()

    return toDos
}

fetchApi()
.then((response) => console.log(response))
.catch((err) => {console.log(err, "el fetch falló")})