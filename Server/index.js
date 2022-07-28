const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const authRoute = require('./api/routes/auth');
const userRoute = require('./api/routes/user');
const postRoute = require('./api/routes/post');

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
app.use('/api/user', userRoute);
app.use('/api/post', postRoute);

app.listen(process.env.PORT, () => console.log('server running'));
