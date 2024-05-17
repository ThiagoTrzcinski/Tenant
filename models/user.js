module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        tenant_id: { type: DataTypes.INTEGER, allowNull: false }
    });
};
