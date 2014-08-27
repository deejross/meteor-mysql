Package.describe({
  summary: "MySQL Client integration for Meteor",
  version: "0.1.0",
  name: "pcel:mysql",
  git: "https://github.com/pcel/meteor-mysql",
  original: "https://github.com/felixge/node-mysql"
});

Npm.depends({
  mysql: "2.4.3",
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('pcel:mysql.js', 'server');
  api.export('mysql', 'server');
});

// TODO
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pcel:mysql');
  api.addFiles('pcel:mysql-tests.js');
});
