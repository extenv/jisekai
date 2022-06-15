const Router = require('express').Router;
const router = Router();

const {  app  } = require('../controllers/app.controller');

router.get('/', app);

module.exports = router;