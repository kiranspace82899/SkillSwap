const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');
const requestRoutes = require('./routes/requestRoutes');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/chats', chatRoutes);

app.get('/', (req, res) => res.send('SkillSwap Backend Running 🚀'));

sequelize.authenticate()
  .then(() => {
    console.log('DB Connected ✅');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.error('Connection error ❌:', err));
