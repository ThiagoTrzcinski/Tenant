const { Tenant } = require('../models');

module.exports = async (req, res, next) => {
    const tenantId = req.headers['x-tenant-id'];
    if (!tenantId) {
        return res.status(400).send('Tenant ID is required');
    }

    const tenant = await Tenant.findByPk(tenantId);
    if (!tenant) {
        return res.status(404).send('Tenant not found');
    }

    req.tenant = tenant;
    next();
};
