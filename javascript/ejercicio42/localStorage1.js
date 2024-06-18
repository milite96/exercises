const user = {
  id: 1,
  name: "John",
  age: 25,
};

function setUserToLocalStorage(user) {
  const stringifyUser = JSON.stringify(user);
  localStorage.setItem("user", stringifyUser);
}

setUserToLocalStorage(user);
