const users = require('./users/users.service.js');
const maps = require('./maps/maps.service.js');
const groups = require('./groups/groups.service.js');
const settings = require('./settings/settings.service.js');
const permissions = require('./permissions/permissions.service.js');
const configuration = require('./configuration/configuration.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(maps);
  app.configure(groups);
  app.configure(settings);
  app.configure(permissions);
  app.configure(configuration);
};
