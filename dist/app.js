"use strict";
const express = require("express");
const app = express();
const port = process.env.PORT;
app.get("/", (req, res) => {
    res.send("Hello World!");
});
console.log(process.cwd());
