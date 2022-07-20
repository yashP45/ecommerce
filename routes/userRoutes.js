const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();
router.get('/:id', userController.getUser)
// Only admins can see all users info
router.get('/allUsers', userController.restrictTo('admin'), userController.getAllUsers)


router.post('/signup', userController.signUp);
router.post('/login', userController.login);


router.patch('/updateMe', userController.updateMe);
router.delete('/deleteMe', userController.deleteMe);




module.exports = router 