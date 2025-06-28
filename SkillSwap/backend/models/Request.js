module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define('Request', {
    fromUserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    toUserId: {
      type: DataTypes.INTEGER,
      allowNull: false  // ✅ This tells Sequelize it's required
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending'
    }
  });

  return Request;
};
