const { User } = require('../models');

exports.createUser = async (req, res) => {
    const { name, email } = req.body;
    const user = await User.create({ name, email, tenant_id: req.tenant.id });
    res.status(201).json(user);
};
