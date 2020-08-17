const express = require('express');
const router = express.Router();

const { Blogpost } = require('./models');

router.get('/', (req, res) => {
  Blogpost.find()
    .then((blogposts) => {
      res.json({
        blogposts: blogposts.map((blogpost) => blogpost.serialize()),
      });
    })
    .catch((err) => {
      console.error('Error: ', err);
      res.status(500).json({ message: 'Internal Server Error' });
    });
});

module.exports = router;
