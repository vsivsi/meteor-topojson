## meteor-topojson

A meteorite package for [Atmosphere](https://atmosphere.meteor.com), providing a wrapper for the [TopoJSON](https://github.com/mbostock/topojson/wiki) library by [Mike Bostock](https://github.com/mbostock).  TopoJSON is an extension to GeoJSON that encodes topology, significantly compressing complex GeoJSON data, and simplfying the analysis of topological questions (e.g. determining polygons that share a boundary).

### How to install:
1. make sure you have [meteorite](https://github.com/oortcloud/meteorite) installed
    `$ npm install -g meteorite`
2. inside your project, run:
    `$ mrt add topojson`

On the client side `meteor-topojson` has no dependencies, although it will commonly be used with the [d3](https://atmosphere.meteor.com/package/d3) package for plotting maps and other geographic data.  On the server TopoJSON is installed via NPM, so all of the dependencies will be included and built automatically.

### In your Meteor project:

#### Client:
Exposes the `topojson` object which implements the "Client API". See the [TopoJSON GitHub Wiki](https://github.com/mbostock/topojson/wiki/API-Reference#wiki-client-api) for more information.

#### Server:
Exposes the `topojson` object, which implements the extended TopoJSON "Server API".  See the [TopoJSON GitHub Wiki](https://github.com/mbostock/topojson/wiki/API-Reference#wiki-server-api) for more information.
