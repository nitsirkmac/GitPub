const express = require('express');
const app = express();
const port = 3000;
const drinks = require('./models/drinks')

app.get('/', (req, res) => {
    res.send("Welcome to the GitPub App!")
})

// Index Route
app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {
        drinks: drinks
    })
})

// Show Route
app.get('/drinks/:indexOfDrinksArray', (req, res) => {
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.indexOfDrinksArray]
    })
    
})

app.listen(port, (req, res) => {
    console.log("You are listening")
})