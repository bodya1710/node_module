const userRouter = require('express').Router();

const userControler = require("../controllers/user.controller");

userRouter.get('/', userControler.getAllUsers);
userRouter.post('/', userControler.createUsers);
userRouter.put('/:userId', userControler.updataUser);
userRouter.delete('/:userId', userControler.deleteUser);
userRouter.get('/:userId', userControler.getById);

module.exports = userRouter;