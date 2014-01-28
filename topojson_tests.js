var geodata = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [[0, 0], [0, 10], [10, 10], [10, 0], [0, 0]]
    ]
  }
};

var topodata = {
  "type": "Topology",
  "objects": {
    "test": {
      "type": "Polygon",
      "arcs": [[0]]
    }
  },
  "arcs": [[[0,0],[0,9999],[9999,0],[0,-9999],[-9999,0]]],
  "bbox": [0,0,10,10],
  "transform": {
    "scale": [0.001000100010001,0.001000100010001],
    "translate": [0,0]
  }
};

Tinytest.add('TopoJSON - Simple Test', function (test) {
  test.equal(
    topojson.feature(topodata, topodata.objects.test),
    geodata,
    "Bad geometry returned by topojson.feature"
  );
});

if (Meteor.isServer) {
  // This is necessary because topojson.topology works in-place
  // destroying the input object in the process
  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  };

  Tinytest.add('TopoJSON - Simple Server Test', function (test) {
    test.equal(
      topojson.topology({"test": clone(geodata)}),
      topodata,
      "Bad topology returned by topojson.topology"
      );
  });
}

