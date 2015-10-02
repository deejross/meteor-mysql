Package.describe({
  summary: "MySQL Client integration for Meteor",
  version: "2.9.0",
  name: "deejross:mysql",
  git: "https://github.com/deejross/meteor-mysql",
  original: "https://github.com/felixge/node-mysql"
});

Npm.depends({
  mysql: "2.9.0",
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('mysql.js', 'server');
  api.export('mysql', 'server');
});

