// Initializes the `configuration` service on path `/configuration`
const createService = require('feathers-knex');
const createModel = require('../../models/configuration.model');
const hooks = require('./configuration.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'configuration',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/configuration', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('configuration');

  service.hooks(hooks);
};
  