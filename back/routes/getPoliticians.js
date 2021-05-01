const router = require('express').Router();
const db = require('../services/db');

router.get('/get', async (req, res, next) => {
  console.log(await db.getPoliticians());
});

module.exports = router;