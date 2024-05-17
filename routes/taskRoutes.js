const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const tenantMiddleware = require('../middlewares/tenantMiddleware');

router.use(tenantMiddleware);
router.post('/', taskController.createTask);
router.get('/', taskController.getTasks);

module.exports = router;
