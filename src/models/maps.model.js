/* eslint-disable no-console */

// maps-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'maps';
  db.schema.hasTable(tableName).then(exists => {
    if(!exists) {
      db.schema.createTable(tableName, table => {
        table.increments('id');
        table.string('title');
        table.string('config_file');
        table.enum('active',['yes','no']);
        table.enum('debug',['yes','no','once']);
        table.enum('archiving',['yes','no']);
        table.datetime('last_ran');
        table.integer('last_error_count');
        table.float('last_duration');
        table.float('sortorder');
        table.string('schedule');
        table.integer('group_id').unsigned();
        table.foreign('group_id').references('groups.id');
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });
  

  return db;
};
