const Router = require('express').Router;
const app = require('./app.routes')
const router = Router();

//Routes
router.use(app);;

module.exports = router;