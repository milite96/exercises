const titleInput = document.getElementById("post-title")
let isCompleted = false;
let postTitle = "";

function changeInput(event){
  postTitle = event.target.value
  return postTitle
}

function toggleCompleted() {
  console.log(isCompleted);
  return isCompleted = !isCompleted;
}

async function postData(title, checked) {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        title: `${title}`,
        completed: checked,
    }),
    headers: {"content-type": "application/json"}
  });
  console.log(data);
  const post = await data.json()
  console.log(post);
  return post
}