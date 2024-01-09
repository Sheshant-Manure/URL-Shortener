const express = require('express');
const router = express.Router();
const { createNewAccount } = require('../controllers/uesrController');

router.post('/signup', createNewAccount);
// router.post('/login', loginUser);

module.exports = router;