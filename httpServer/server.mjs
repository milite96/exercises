import { createServer } from "node:http"

const data = {
    name: "John",
    age: 24
}

const server = createServer((req, res) => {
    console.log("request received");

    console.log(req);

    res.statusCode = 200;

    res.setHeader("Content-Type", "application/json");
    
    res.end(JSON.stringify(data));
})

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});