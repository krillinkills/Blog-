const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

//register
router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: erq.body.username,
      email: req.body.email,
      password: hashPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Login

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json('Wrong credentials');

    const validated = await bcrypt.compare(re.body.password, user.password);
    !validated && res.status(400).json('Wrong credentials');
    const { password, ...others } = user._doc; //saves all but password in others

    res.status(200).json(others);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
