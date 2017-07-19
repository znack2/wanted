
/*
* PASHA Script
* TODO: get info about it
*/
process.env.NODE_ENV = 'production'

require('dotenv').config({
  silent: true,
  path: './.env.server',
})

const fs = require('fs')
const path = require('path')
const paths = require('react-app-rewired/config/paths')
const webpackConfig = paths.scriptVersionDir + '/config/webpack.config.prod'
const config = require(webpackConfig)
const override = require('../config-overrides-server')

require.cache[require.resolve(webpackConfig)].exports =
  override(config, process.env.NODE_ENV)

// console.log(require.cache)
// console.log(require.cache)

for (var id in require.cache) {
  // console.log(id, id.indexOf(`fs-extra`), require.cache[id].exports.existsSync)
  if (id.indexOf(`fs-extra`) !== -1
    && require.cache[id].exports
    && require.cache[id].exports.existsSync
  ) {
    require.cache[id].exports = {
      existsSync: () => {},
      emptyDirSync: () => {},
      copySync: () => {},
    }
  }
}

// require.cache[require.resolve('fs-extra')].exports = {
//   existsSync: () => {},
//   emptyDirSync: () => {},
//   copySync: () => {},
// }
//

require(paths.scriptVersionDir + '/scripts/build')
