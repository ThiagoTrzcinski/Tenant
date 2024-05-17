const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const tenantMiddleware = require('../middlewares/tenantMiddleware');

router.use(tenantMiddleware);
router.post('/', userController.createUser);

module.exports = router;
