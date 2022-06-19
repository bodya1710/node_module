const users = require('../dataBase/users');

function getAllUsers(req, res) {
    try {
        res.json(users)
    } catch (e) {
        res.status(400).json(e.message || 'Unknow Error');
    }

}

function createUsers(req, res) {
    try {
        console.log(req.body);
        res.status(201).json('Users was created');
    } catch (e) {
        res.status(400).json(e.message || 'Unknow Error');
    }

}

function deleteUser(req, res) {
    try {
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
    } catch (e) {
        res.status(400).json(e.message || 'Unknow Error');
    }
}


function getById(req, res) {
    try {
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
    } catch (e) {
        res.status(400).json(e.message || 'Unknow Error');
    }

}

function updataUser(req, res) {
    try {
        const userId = +req.params.userId;
        const user = users[userId];
        user.name = user.name + "NEW";
        res.status(200).json("User was Update");
    } catch (e) {
        res.status(400).json(e.message || 'Unknow Error');
    }

}

module.exports = {
    getAllUsers,
    createUsers,
    deleteUser,
    getById,
    updataUser
}