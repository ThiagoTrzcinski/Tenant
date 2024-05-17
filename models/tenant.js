module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Tenant', {
        name: { type: DataTypes.STRING, allowNull: false }
    });
};
