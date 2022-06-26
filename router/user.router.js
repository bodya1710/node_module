const {userControler} = require("../controllers");
const router = require('express').Router();

router.get('/', userControler.findUsers);
router.post('/', userControler.createUser);

router.get('/:userId', userControler.getUserById);
router.put('/:userId', userControler.updateUserById);
router.delete('/:userId',userControler.deletUserById);

module.exports = router;