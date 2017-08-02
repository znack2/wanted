/**
 * Server setup
 * =============================================================================
 */

/**
 * Module dependencies.
 * =============================================================================
 */
import express            from 'express'
import morgan             from 'morgan'
import bodyParser         from 'body-parser'
import compression        from 'compression'
import { isError }        from 'lodash'
import chalk              from 'chalk'

/**
 * Helpers dependencies.
 * =============================================================================
 */
import createLog              from './tasks/createLog'

import routes                 from './routes/routes'

import session                from './middlewares/session'
import error                  from './middlewares/error'
import access                 from './middlewares/access'
import auth                   from './middlewares/auth'

// import graphQl                from './middlewares/graphQl'
// import docs                   from './middlewares/docs'
// import cors                   from './middlewares/cors'
// import template               from './middlewares/template'

/*
 *  START SERVER
 *  =============================================================================
 */
function init({ config }) {
    /**
     * Create Express server.
     */
    const app = express()
    initExpress(app,config)
    initMiddlewares(app,config)
    createLog()

    // We need this to make sure we don't run a second instance
    if (!module.parent) {
    app.listen(config.web.port, err => {
          if (err) {
            console.log(chalk.red('Cannot run!'))
          } else {
            console.log(
              chalk.green.bold(
                `
              Yep this is working 🍺
              App listen on port: ${ config.web.port } 🍕
              Env: ${process.env.NODE_ENV}
              Press CTRL-C to stop\n🦄
                `,
              ),
            )
          }
      })
    }
}


// server.listen(PORT, () => {
//   console.log(`==> 🌎  http://0.0.0.0:${ PORT }/`)
//   resolve()
// })

// app.listen(app.get('port'), () => {
//   console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
// });

/*
 * Setup express
 * =============================================================================
 */
function initExpress(app,config) {
    if (config.app.isDevLocal) app.use(morgan('dev')) //log requests
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json()) // get information from html forms
    app.use(compression())
}

/*
 * Setup Middlewares
 * =============================================================================
 */
function initMiddlewares(app,config) {
    // graphQl.initGraphQL(app,config)
    // docs.init(app,config)
    session.initSession(app,config)
    error.initErrorHandling(app,config)
    const passport = auth.initAuth(app,config)
    const router = access.init(app,passport)
    routes.initRoutes(router,passport)
}

export default {
  init
}


