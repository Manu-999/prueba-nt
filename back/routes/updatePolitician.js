const router = require('express').Router();
const db = require('../services/db');

router.update('/update/:id', async (req, res, next) => {
  const updated = await db.updatePolitician(req.body.id, req.body.data);
});

module.exports = router;