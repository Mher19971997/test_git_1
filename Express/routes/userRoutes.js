const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.post('/', authMiddleware, userController.createUser);

module.exports = router;
