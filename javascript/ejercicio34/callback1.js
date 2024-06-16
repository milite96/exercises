function printAsyncName (callback, name) {
    let id1= setInterval(callback, 1000);
    let id2= setInterval(() => console.log(name), 2000);
    setTimeout(() => clearInterval(id1), 1000);
    setTimeout(() => clearInterval(id2), 2000);
    }
    
    printAsyncName(() => console.log("hello"), "peter")