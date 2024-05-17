const { Task } = require('../models');

exports.createTask = async (req, res) => {
    const { title, description, user_id } = req.body;
    const task = await Task.create({ title, description, user_id, tenant_id: req.tenant.id });
    res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
    const tasks = await Task.findAll({ where: { tenant_id: req.tenant.id } });
    res.json(tasks);
};
