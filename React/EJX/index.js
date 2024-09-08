const express = require("express");
const app = express();
const path = require("path")


let port = 8080;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/view"));
app.get("/", (req, res) => {
    res.render("home.ejs")
})
app.listen(port, () => {
    console.log(`listing on port ${port}`);
})