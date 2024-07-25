const express = require('express');
const app = express();
const cors = require('cors')

const mainRoutes = require('./routes/mainRoutes')


app.use(cors())
app.use("/", mainRoutes)

app.listen(3001, () => {
    console.log(`server listening on: http://localhost:3001 `);
})