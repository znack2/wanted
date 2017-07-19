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
// import cors            from 'cors'
// import http            from 'http'
// import errorhandler    from 'errorhandler'
// import dotenv          from 'dotenv'
// import cookieParser    from 'cookie-parser'
// import path            from 'path'
// import HTTPStatus      from 'http-status'
// import validate        from 'express-validation'
// import async           from 'async'

/**
 * Helpers dependencies.
 */
import pathHelper             from './helpers/pathHelper'
// import config                 from './config'
// import logger                 from './logger'
// import auth                from './auth/authInit'
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

const isDev           = process.env.NODE_ENV === 'development'
const isTest          = process.env.NODE_ENV === 'test'

/**
 * MIddleware.
 */
// middlewaresConfig(app)


/*
 *  START SERVER
 */
function init(options) {

    // initExpress()
    //
    // const passport = require('passport')
    //
    // routes.init(app, passport)
    //
    // logger.initLoggers()
    //
    // initErrorHandling(app)

  // We need this to make sure we don't run a second instance
  // if (!module.parent) {
    //const port = config.web.port || 1111

    app.listen( options.port, err => {
          if (err) {
            console.log(chalk.red('Cannot run!'))
          } else {
            console.log(
              chalk.green.bold(
                `
              Yep this is working 🍺
              App listen on port: ${ options.port } 🍕
              Env: ${process.env.NODE_ENV} 🦄
                `,
              ),
            )
          }
      })
  // }
}

/*
 * PRIVATE function
 */
// function initExpress() {
//     if (config.app.isDevLocal) app.use(morgan('dev')) //log requests
//
//     app.use(bodyParser.json()) // get information from html forms
//     app.use(bodyParser.urlencoded({extended: true}))
//     app.use(express.static(pathHelper.getRelative('build/client')))
//     app.use(compression())
//
//     //NOTE following required for auth only
//     initSession()
//     initAuth()
// }
//
// /*
// * PRIVATE function
// */
// function initAuth() {
//     const flash    = require('connect-flash')
//     const passport = require('passport')
//
//     app.use(flash())
//     auth(passport)
//     app.use(passport.initialize())
//     app.use(passport.session()) // persistent login sessions
//
//     return passport
// }
//
// /*
//  * PRIVATE function
//  */
// function initSession() {
//     const cookieParser = require('cookie-parser')
//     const session      = require('cookie-session')
//     app.use(cookieParser())
//     app.use(session({
//         secret: config.web.sessionSecret
//     }))
// }
//
// /*
//  * PRIVATE function
//  */
// function initErrorHandling(app) {
//
//     //log unhandled errors
//     app.use(function (err, req, res, next) {
//         logger.error(err)
//         console.log(err)
//
//         let message = isError(err) ? err.message : err
//         message = config.app.isDevLocal ? message : 'Server Error'
//
//         res.status(500).send({error: message})
//     })
//
//     process.on('uncaughtException', function (err) {
//         logger.error(err)
//     })
// // }

export default {
  init
}


