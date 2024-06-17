async function fetchApi(){
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/todos")
    const parsedData = await fetchData.json()
    console.log(fetchData);
    console.log(parsedData);

    return parsedData
}

fetchApi();