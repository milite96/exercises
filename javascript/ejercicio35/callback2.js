function repeatHello(callback) {
let id = setInterval(callback, 1000);

}

// al correr esto entra en un bucle infinito porque no tiene el clearInterval()
repeatHello(() => console.log("Hello")); 