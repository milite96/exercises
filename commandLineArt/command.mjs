import figlet from "figlet"

figlet("xD", (err, data) => {
    if (err) {
        console.log("something went wrong");
        console.dir(err);
        return
    }

    console.log(data);
})