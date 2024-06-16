function repeatHello(callback) {
let id = setInterval(callback, 1000);
setTimeout(() => clearInterval(id), 5000)
}

repeatHello(() => console.log("Hello")) 

// tiene que ser una arrow function porque en los callbacks se necesita llamar a la función de esa manera