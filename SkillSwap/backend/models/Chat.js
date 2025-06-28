module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define('Chat', {
    from: DataTypes.INTEGER,
    to: DataTypes.INTEGER,
    message: DataTypes.STRING,
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });

  return Chat;
};
