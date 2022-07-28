const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const authRoute = require('./api/routes/auth');
app.use(express.json());
dotenv.config();

app.get('/', (req, res) => {
  res.send('running');
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('connected'))
  .catch((err) => console.log(err.message));

app.use('/api/auth', authRoute);

app.listen(process.env.PORT, () => console.log('server running'));
