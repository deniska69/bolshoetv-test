const Router = require('express');
const router = new Router();

const Visitors = require('../models/Visitors');

router.post('/visitors', async (req, res) => {
  try {
    const { 
      event, 
      user_agent, 
      uid, 
      ip, 
      source, 
      campaign_id,
      date_visit,
      date_last,
      url_visit,
      url_last,
    } = req.body;

    const visitor = new Visitors({ 
      event, 
      user_agent, 
      uid, 
      ip, 
      source, 
      campaign_id,
      date_visit,
      date_last,
      url_visit,
      url_last,
    });

    await visitor.save();

    return res.json({ result: true });

  } catch (e) {
    res.status(400).send({ message: 'Error: api/visitors' });
  }
});

module.exports = router;