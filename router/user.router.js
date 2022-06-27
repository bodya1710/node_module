const {userControler} = require("../controllers");
const {commonMiddlewares, userMiddlewares} = require("../middlewares");
const router = require('express').Router();

router.get('/',
    userControler.findUsers);
router.post('/',
    userMiddlewares.isUserValidForCreate,
    userMiddlewares.isUserUniq,
    userControler.createUser);

router.get('/:id',
    commonMiddlewares.isIdValid,
    userMiddlewares.isUserPresent,
    userControler.getUserById);
router.put('/:id',
    commonMiddlewares.isIdValid,
    userMiddlewares.isUserValidForUpdate,
    userMiddlewares.isUserPresent,
    userControler.updateUserById);
router.delete('/:id',
    commonMiddlewares.isIdValid,
    userMiddlewares.isUserPresent,
    userControler.deletUserById);

module.exports = router;