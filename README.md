# meteor-topojson

a simple meteorite package for [Atmosphere](https://atmosphere.meteor.com), providing a wrapper for the [TopoJSON](https://github.com/mbostock/mbostock) library by [Mike Bostock](https://github.com/mbostock).

## How to install:
1. make sure you have [meteorite](https://github.com/oortcloud/meteorite) installed
    `$ npm install -g meteorite`
2. inside your project, run:
    `$ mrt add topojson`

On the client side `meteor-topojson` has no dependencies, although it will commonly be used with the [d3](https://atmosphere.meteor.com/package/d3) package for plotting maps and other geographic data.  On the server TopoJSON is installed via NPM, so all of the dependencies will be included and built automatically.

## In your Meteor project:

#### Client
Exposes the `topojson` object, which implements the "Client API" on the client side. See the [TopoJSON GitHub Wiki](https://github.com/mbostock/topojson/wiki) for more information.

#### Server:
`meteor-topojson` exposes the `topojson` object, which implements the TopoJSON the extended TopoJSON "Server API" on the server side.  See the [TopoJSON GitHub Wiki](https://github.com/mbostock/topojson/wiki) for more information.

### Pull requests / issues
Please feel free to make pull requests and submit issues here. Thank you!

### TODO:
1. Add tests. If anyone would like to submit tests, please do!
