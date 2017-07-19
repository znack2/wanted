var fs = require('fs')

/*
*  Pasha script
*  TODO: get info about it
*/
var nodeModules = {}
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod
  })

module.exports = function override(config) {
  const pathAppBuild = config.output.path
  const publicPath = config.output.publicPath

  config.entry = ['./src/backend/tasks/startServer.js']
  config.externals = nodeModules
  config.output = {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    path: pathAppBuild,
    publicPath,
  }

  config.plugins = [
    config.plugins[2]
  ]

  config.target = 'node'
  config.node = {}
  return config
}

