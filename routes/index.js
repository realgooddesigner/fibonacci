const express = require('express');
const router = express.Router();

const Arena = require('are.na');
debugger;
router.get('/', (req, res, next) => {
  const arena = new Arena({
        accessToken: '905ec405a2507d74d0c7597b6c314ba53ff6b98156e007a0b24f8e17a054ddda',
  });
  console.log(process.env.ARENA_CHANNEL_ID);
  arena
    .channel('fibonacci-vrfozkn_7t4').get()
    .then(data =>
      res.render('index', data)
    )
    .catch(next);
});

module.exports = router;
