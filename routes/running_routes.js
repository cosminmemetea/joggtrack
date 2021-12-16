const express = require('express');
const router = express.Router();
const runningController = require('../controllers/running_controller')
router.post('/', runningController.createRunning);
module.exports = router;