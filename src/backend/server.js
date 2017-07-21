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
import flash              from 'connect-flash'
import passport           from 'passport'
import cookieParser       from 'cookie-parser'
import session            from 'cookie-session'

// import cors            from 'cors'
// import http            from 'http'
// import errorhandler    from 'errorhandler'
// import dotenv          from 'dotenv'
// import path            from 'path'
// import HTTPStatus      from 'http-status'
// import validate        from 'express-validation'
// import async           from 'async'

/**
 * Helpers dependencies.
 */
import pathHelper             from './helpers/pathHelper'
import createLog              from './tasks/createLog'
import routes                 from './routes/routes'
// import checkAuth           from 'middleware/checkAuth'
// import middlewaresConfig   from './middlewares'
// import logErrorService     from '../services/log'
// import APIError            from '../services/error'
// var HttpError          = require('error').HttpError
// var AuthError          = require('models/user').AuthError

/**
 * Create Express server.
 */
const app = express()

/**
 * MIddleware.
 */
// middlewaresConfig(app)


/*
 *  START SERVER
 */


function init({ config }) {


    initExpress(config)


    initAuth(config)


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
 * PRIVATE function
 */
function initExpress(config) {
    if (config.app.isDevLocal) app.use(morgan('dev')) //log requests

    app.use(bodyParser.json()) // get information from html forms
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(express.static(pathHelper.getRelative('build/client')))
    app.use(compression())

    //NOTE following required for auth only
    initSession(config)
}

/*
* PRIVATE function
*/
function initAuth(config) {
    app.use(flash())
    routes.initPassport(passport,config)
    app.use(passport.initialize())
    app.use(passport.session()) // persistent login sessions

    return passport
}

/*
 * PRIVATE function
 */
function initSession(config) {
    app.use(cookieParser())
    app.use(session({
        secret: config.web.sessionSecret
    }))
}

/*
 * PRIVATE function
 */
function initErrorHandling(config) {
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


