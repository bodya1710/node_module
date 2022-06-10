const express = require('express');
const app = express();

const users = require('./usres/users.js');
const {json} = require("express");

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users/:userName/create', (req, res) => {
    users.push({
        name: req.params.userName
    })
    res.status(201).json('Users was created');
});

app.put('/users/:userId', (req, res) => {
    const userId = +req.params.userId;
    const user = users[userId];
    user.name = user.name + "NEW";
    res.status(200).json("User was Update");
})

app.delete('/users/:userId', (req, res) => {
    const userId = +req.params.userId;

    if (isNaN(userId) || userId < 0) {
        res.status(400).json('Enter valid Id');
        return
    }
    const user = users[userId];
    if (!user) {
        res.status(404).json(`User with ID ${userId} dont found`);
        return;
    }
    users.splice(userId, 1);
    res.status(200).json(users);

})

app.get('/users/:userId', (req, res) => {
    const userId = +req.params.userId;
    if (isNaN(userId) || userId < 0) {
        res.status(400).json('Enter valid Id');
        return
    }
    const user = users[userId];
    if (!user) {
        res.status(404).json(`User with ID ${userId} dont found`);
        return;
    }
    res.status(200).json(user);

})

app.get('*', (req, res) => {
    res.status(404).json('NOt found');
});

app.listen(5000, () => {
    console.log('Server run on host: 5000');
});