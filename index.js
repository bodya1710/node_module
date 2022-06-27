const express = require('express');
const mongoose = require('mongoose');

const {UserRouter} = require("./router");
const {configs} = require("./config");
const app = express();

mongoose.connect(configs.MONGO_URL);

app.use(express.json());

app.use('/users', UserRouter);

app.use('*', (req, res) =>{
    res.status(404).json('Page not found');
});
app.use((err, req, res, next)=>{
    res
        .status(err.status || 500)
        .json({
            error: err.message || 'Unknow Error',
            code: err.status || 500
        });
});

app.listen(configs.PORT, () => {
    console.log(`Server run on host: ${configs.PORT}`);
});