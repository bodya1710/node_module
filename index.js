const express = require('express');
const app = express();

const {fileService} = require("./service");
app.use(express.json());

app.get('/users', async (req, res) => {
    const users = await fileService.reader();

    res.json(users);
});
app.post('/users', async (req, res) => {
    const {name, age} = req.body;

    if (!Number.isInteger(age) || age < 18) {
        return res.status(400).json('Enter valid age');
    }
    if (!name && name.length < 3) {
        return res.status(400).json('Enter valid name');
    }
    const users = await fileService.reader();

    const newUser = {...req.body, id: users.length ? users[users.length - 1].id + 1 : 1};

    await fileService.writer([...users, newUser]);

    res.status(201).json(newUser);
});
app.get('/users/:userId', async (req, res) => {
    const {userId} = req.params;
    const users = await fileService.reader();

    const user = users.find(user => user.id === +userId);

    if (!user) {
        return res.status(400).json(`User with id ${userId} not found`);
    }
    res.status(201).json(user);
});
app.delete('/users/:userId', async (req, res) => {
    const {userId} = req.params;
    const users = await fileService.reader();

    const index = users.findIndex(user => user.id === +userId);

    if (index === -1) {
        return res.status(400).json(`User with id ${userId} not found`);
    }

    users.splice(index, 1);

    await fileService.writer(users);

    res.status(204).json("User delet");
});
app.put('/users/:userId', async (req, res) => {
    const {name, age} = req.body;
    const {userId} = req.params;

    if (!Number.isInteger(age) || age < 18) {
        return res.status(400).json('Enter valid age');
    }
    if (!name && name.length < 3) {
        return res.status(400).json('Enter valid name');
    }
    const users = await fileService.reader();

    const index = users.findIndex(user => user.id === +userId);

    const updateUsers = Object.assign(users[index], req.body);

    const newUsersArr = [...users, updateUsers]

    await fileService.writer(newUsersArr);

    res.status(201).json(updateUsers);
});

app.listen(5000, () => {
    console.log('Server run on host: 5000');
});