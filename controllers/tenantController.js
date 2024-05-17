const { Tenant } = require('../models');

exports.createTenant = async (req, res) => {
    const { name } = req.body;
    const tenant = await Tenant.create({ name });
    res.status(201).json(tenant);
};
