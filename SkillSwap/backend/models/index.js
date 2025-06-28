const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
  skillsHave: DataTypes.STRING,
  skillsWant: DataTypes.STRING
});

const Request = require('./Request')(sequelize, DataTypes);
const Chat = require('./Chat')(sequelize, DataTypes);

sequelize.sync({ force: false })
  .then(() => console.log('DB Synced ✅'))
  .catch(err => console.error('DB Sync Error ❌:', err));

module.exports = { sequelize, User, Request, Chat };
