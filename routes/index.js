const routes = require('express').Router();
const api = require('./api');
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/api',api);

module.exports = routes;