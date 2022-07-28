const router = require('express').Router();
const User = require('../models/user');
const Post = require('../models/post');
const bcrypt = require('bcrypt');

//UPDATE

router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    //check if password is in body or not
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      //updating user
      const updatedUser = await User.findByIdAndUpdate(
        erq.params.id,
        {
          $set: req.body,
        },
        { new: true } //for getting updated data
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(00).json(err);
    }
  } else {
    res.status(401).json('ypu can update only your account');
  }
});

//DELETE
router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      //check if user is in db or not
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await user.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted');
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(401).json('User not found');
    }
  } else {
    res.status(200).json('You can delete only your account');
  }
});

//GET
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status.json(err);
  }
});

module.exports = router;
