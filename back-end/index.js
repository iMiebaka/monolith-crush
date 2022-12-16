const express = require("express")
const app = express()
const cors = require("cors");
const path = require('path');

app.use(cors());
app.use(express.json())
app.use(express.static("dist"));
const PORT = 2000 | process.env.PORT

app.use((req, res, next) => {
    if (req.url.substring(0, 4) !== "/api") {
        return res.sendFile(path.join(__dirname + "/dist/index.html"));
    }
    next()
})



app.get("/api/v1", (req, res) => {
    res.json({ message: "This server is running on " + PORT })
})

app.get("/api/v1/1", (req, res) => {
    res.json({ message: "This is the Page One" })
})

app.get("/api/v1/2", (req, res) => {
    res.json({ message: "This is the Page Two" })
})

app.use((req, res) => {
    res
        .status(404)
        .json({ message: "Route not found" })
})


app.listen(PORT, () => {
    console.log("App is running port " + PORT);
})