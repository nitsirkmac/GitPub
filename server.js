const express = require('express');
const app = express();
const port = 3000;
const drinks = require('./models/drinks')
const food = require('./models/food')

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
app.get('/drinks/:id', (req, res) => {
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.id]
    })
    
})

// Food Index Route
app.get('/food', (req, res) => {
    res.render('food_index.ejs', {
        meals: food,
    }
})

// Food Show Route
app.get('/food/:id', (req, res) => {
    res.render('food_show.ejs', {
        meal: food[req.params.id]
    })
})

app.listen(port, (req, res) => {
    console.log("You are listening")
})