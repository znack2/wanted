/**
 * Server setup
 */
/**
 * Module dependencies.
 */
import express            from 'express'
import morgan             from 'morgan'
import bodyParser         from 'body-parser'
import compression        from 'compression'
import { isError }        from 'lodash'
import chalk              from 'chalk'


/**
 * Helpers dependencies.
 */
import pathHelper             from './helpers/pathHelper'
import createLog              from './tasks/createLog'
import routes                 from './routes/sberRoutes'
import passport               from './middlewares/passport'
// import grahql                 from './middlewares/graphql'
import session                from './middlewares/session'

/*
 *  START SERVER
 */
function init({ config }) {
    /**
     * Create Express server.
     */
    const app = express()
    initExpress(app,config)
    // grahql.initGraphQL(app,config)
    passport.initAuth(app,config)
    session.initSession(app,config)
    routes.initRoutes(app,passport)
    createLog()
    initErrorHandling(app,config)

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
              Env: ${process.env.NODE_ENV} 🦄
                `,
              ),
            )
          }
      })
    }
}

/*
 * Setup express
 */
function initExpress(app,config) {
    if (config.app.isDevLocal) app.use(morgan('dev')) //log requests
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json()) // get information from html forms
    app.use(express.static(pathHelper.getRelative('build/client')))
    app.use(compression())
}

/*
 * PRIVATE function
 */
function initErrorHandling(app,config) {
    //log unhandled errors
    app.use(function (err, req, res, next) {

        createLog({ err })
        //logger.error(err)
        console.log({ err })

        let message = isError(err) ? err.message : err
        message = config.app.isDevLocal ? message : 'Server Error'

        res.status(500).send({error: message})
    })
    process.on('uncaughtException', function (err) {
        createLog({ err })
        //logger.error(err)
    })
}

export default {
  init
}


