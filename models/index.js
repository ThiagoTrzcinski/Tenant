const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Tenant = require('./tenant')(sequelize, Sequelize);
const User = require('./user')(sequelize, Sequelize);
const Task = require('./task')(sequelize, Sequelize);

Tenant.hasMany(User, { foreignKey: 'tenant_id' });
User.belongsTo(Tenant, { foreignKey: 'tenant_id' });
Tenant.hasMany(Task, { foreignKey: 'tenant_id' });
Task.belongsTo(Tenant, { foreignKey: 'tenant_id' });
User.hasMany(Task, { foreignKey: 'user_id' });
Task.belongsTo(User, { foreignKey: 'user_id' });

module.exports = { sequelize, Tenant, User, Task };