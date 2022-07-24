const Router = require('express');
const router = new Router();

const Movies = require('../models/Movies');

router.get('/allMovies', async (req, res) => {
  try {
    const movies = await Movies.find();
    return res.json({ movies });
  } catch (e) {
    res.status(400).send({ message: 'Error: api/allMovies' });
  }
});

module.exports = router;