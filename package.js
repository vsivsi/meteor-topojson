Package.describe({
  summary: 'Meteor package to wrap TopoJSON: An extension to GeoJSON that encodes topology'
});

Package.on_use(function(api) {
  api.export('topojson');
  api.add_files('meteor-topojson.js', 'server');
  api.add_files('topojson.js', 'client');
});

Npm.depends({
  topojson: '1.4.6'
});
