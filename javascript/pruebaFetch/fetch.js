async function fetchApi(){
fetch("https://cors-anywhere.herokuapp.com/www.freetogame.com/api/games")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error: ", error))
}

const button = document.getElementById("getFetch")

button.addEventListener("click", fetchApi)
