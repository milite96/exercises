const number = 15;

const myPromise = new Promise((resolve, reject) => {
    if (number > 10) {
        resolve(`promise is fullfiled, ${number} is greater than 10`)
    } else {
        reject(`promise is rejected, ${number} is lower than 10`)
    }
})

myPromise
.then(resolved => console.log(resolved))
.then(console.log(myPromise))
.catch(err => console.log(err))