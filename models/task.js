module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Task', {
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT },
        tenant_id: { type: DataTypes.INTEGER, allowNull: false },
        user_id: { type: DataTypes.INTEGER, allowNull: false }
    });
};
