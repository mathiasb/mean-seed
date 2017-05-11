import express from 'express';
import path from 'path';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('_index');
});

module.exports = router;
