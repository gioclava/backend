const api = require('express').Router();
const entityConfig = require('./entityConfig');
const entity = require('./entity');
const view = require('./view');
api.get('/', (req,res)=> {
	res.redirect('view/backofficeView');
});

api.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

api.use('/entity', entity);
api.use ('/view', view);
api.use ('/entityConfig', entityConfig);

module.exports = api;