const express = require('express');
const app = express();
const port = 3000;

const server = app.listen(port, () => console.log("Listening on port " + port));

app.set("view engin", "pug");
app.set("views", "views");

app.get("/", (req, res, next) => {
    res.status(200).send("200")
})