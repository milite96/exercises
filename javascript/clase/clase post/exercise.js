async function postData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        title: "titulo1",
        completed: true,
    }),
    headers: {"content-type": "application/json"}
  });
  const post = await data.json()
  console.log(post);
  return post
}

postData();
