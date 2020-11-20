/*
 * Version 
 * Author: ujkuo
 * GitHub: github.com/ujkuo
 * Copyleft (C) 2020 ujkuo all rights reversed
 *
 */
const express = require('express')
const app = express()
const port = 3000
const path = require("path")


app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/test", (req, res) => {
      res.send("<h1>Test</h1>");
});

app.get("/abc", (req, res) => {
      res.send('<h1 style = "color:red">abc</h1>');
});

app.get("/cde", (req, res) => {
    res.send('<button type = "button"> click </button>')
})

app.get("/main.css", (req, res) => {
    res.sendFile(path.join(__dirname, "main.css"))
})

app.get("/img.png", (req, res) => {
    res.sendFile(path.join(__dirname, "img.png"))
})

app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
});
