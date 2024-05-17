const express = require('express');
const router = express.Router();

const tenantRoutes = require('./tenantRoutes');
const userRoutes = require('./userRoutes');
const taskRoutes = require('./taskRoutes');

router.use('/tenants', tenantRoutes);
router.use('/users', userRoutes);
router.use('/tasks', taskRoutes);

module.exports = router;
