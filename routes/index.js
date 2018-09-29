const express = require('express');
const router = express.Router();

const Arena = require('are.na');

router.get('/', (req, res, next) => {
  const arena = new Arena({
        accessToken: process.env.PERSONAL_ACCESS_TOKEN ,
  });

  arena
    .channel(process.env.ARENA_CHANNEL_ID).get()
    .then(data =>
      res.render('index', data)
    )
    .catch(next);
    
});

module.exports = router;
