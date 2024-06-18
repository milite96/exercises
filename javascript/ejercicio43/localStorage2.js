const user = {
  id: 1,
  name: "John",
  age: 25,
};

function setUserToLocalStorage(user) {
  const stringifyUser = JSON.stringify(user);
  localStorage.setItem("user", stringifyUser);
}

function getUserFromLocalStorage(user) {
  setTimeout(() => {
    const getUserJson = localStorage.getItem(user);
    const parseUserInfo = JSON.parse(getUserJson);
    console.log(parseUserInfo);
    return parseUserInfo;
  }, 500);
}

setUserToLocalStorage(user);
getUserFromLocalStorage("user");
