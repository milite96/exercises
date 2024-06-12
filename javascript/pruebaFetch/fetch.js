async function fetchApi(){
    const headers = {'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
	'x-rapidapi-key': '2e2086454amsh66a83740e5d1077p14df82jsn13b968e9f334'}
fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
    mode: 'cors', headers
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error: ", error))
}

const button = document.getElementById("getFetch")

button.addEventListener("click", fetchApi)
