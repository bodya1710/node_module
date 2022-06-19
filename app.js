const express = require('express');
const app = express();
const userRouter = require('./routes/user.router');


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);

app.get('*', (req, res) => {
    res.status(404).json('NOt found');
});

app.listen(5000, () => {
    console.log('Server run on host: 5000');
});