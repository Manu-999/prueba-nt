const router = require('express').Router();
const db = require('../services/db');

router.post('/create', async (req, res, next) => {
  const inserted = await db.createPolitician(req.body);
  inserted.insertedId ? res.status(200).json({status: 'Inserted OK'}) : res.status(404).json({status: 'Error inserting. KO.'})
});

module.exports = router;