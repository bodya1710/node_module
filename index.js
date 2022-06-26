const express = require('express');
const {UserRouter} = require("./router");
const app = express();

app.use(express.json());

app.use('/users', UserRouter);

app.use('*', (req, res) =>{
    res.status(404).json('Page not found');
});

app.listen(5000, () => {
    console.log('Server run on host: 5000');
});