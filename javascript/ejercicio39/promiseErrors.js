const isLogged = true;


function isUserLogged(isLogged) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.random()
            if (isLogged) {
                resolve(number)
            } else {
                reject(new Error("isLogged is false"))
            }
        }, 500)
    })

}

function getUserInfo(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number > 0.5) {
                resolve(`{"name": "John", "age": 24}`)
            } else {
                reject(new Error("number is lower than 0.5"))
            }
        }, 500)
    });
}

function printUserInfo(userInfo) {
    return JSON.parse(userInfo);
}

isUserLogged(isLogged)
    .then((response) => (
        console.log(response),
        getUserInfo(response)
    ))
    .then((logedUser) => (
        console.log((logedUser)),
        printUserInfo(logedUser)
    ))
    .then((val) => console.log(val))
    .catch(error => console.error(error))
    .finally(console.log("this always runs!"))