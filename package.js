Package.describe({
  summary: 'Meteor package to wrap TopoJSON: An extension to GeoJSON that encodes topology'
});

Package.on_use(function(api) {
  api.export('topojson');
  api.add_files('meteor-topojson.js', 'server');
  api.add_files('topojson.js', 'client');
});

Package.on_test(function (api) {
  api.use(['topojson', 'tinytest']);
  api.add_files('topojson_tests.js', ['server', 'client']);
});

Npm.depends({
  topojson: '1.6.8'
});
