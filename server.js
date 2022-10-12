const express = require('express');
const app = express();
const port = 3000;
const drinks = require('./models/drinks')

app.get('/', (req, res) => {
    res.send("Welcome to the GitPub App!")
})

app.get('/drinks', (req, res) => {
    // res.send(drinks)
    console.log(drinks)
})

app.listen(port, (req, res) => {
    console.log("You are listening")
})