// //TODO : logger service

import { isError,omit }     from 'lodash'
import moment               from 'moment'
import winston              from 'winston'


import pathHelper           from '../helpers/pathHelper'
import AppError             from '../helpers/appError'


let errorLogger = null
let performanceLogger = null
let infoLogger = null
let performanceCache = {}

function initLogger(config) {

    let getTransportFile = (logFileName) =>
        new winston.transports.File({filename: pathHelper.getDataRelative('logs', logFileName)})

    performanceLogger = new (winston.Logger)({
        transports: [
            getTransportFile('performance.log')
        ]
    })


    errorLogger = new (winston.Logger)({
        transports: [
            getTransportFile('errors.log')
        ]
    })

    if (config.app.logErrors) {
        winston.handleExceptions(
            (new (winston.transports.Console)()),
            getTransportFile('errors.log')
        )

    }

    infoLogger = new (winston.Logger)({
        transports: [
            new (winston.transports.Console)(),
            getTransportFile('info.log')
        ]
    })


        // remove later

      // const logger = new winston.Logger({
      //   transports: [
      //     new winston.transports.Console({
      //       json: true,
      //       colorize: true,
      //     }),
      //   ],
      // });
}

function logTimeStart(timerName,config) {
    if (!config.app.isDevLocal) return

    if (performanceCache[timerName]) throw new AppError('Timer was already created. Timer name: ' + timerName)

    performanceCache[timerName] = new Date().getTime()

}

function logTimeEnd(timerName,config) {
    if (!config.app.isDevLocal) return

    if (!performanceCache[timerName]) throw new AppError('Timer was not previously created. Timer name: ' + timerName)

    let endTime = new Date().getTime()
    let startTime = performanceCache[timerName]

    let ms = endTime - startTime
    performanceLogger.info('Timer ' + timerName + ': ' + moment.utc(ms).format('HH:mm:ss.SSS'))

    performanceCache = omit(performanceCache, timerName)
}

function logError(err) {
    if (isError(err)) {
        errorLogger.error('Error', {errorMessage: err.message, stack: err.stack})
        return
    }

    errorLogger.error(err)
}


// function logError(error,config) {
//   if (!config.app.logErrors) return
//
//   if (error.isAppError && !error.log) return
//
//   createLog({ error })
// }

function logInfo(message) {
    infoLogger.info(message)
}

function logMessage(message, metadata) {
    infoLogger.info(message, metadata)
}

export default {
  init: initLogger,
  error: logError,
  info: logInfo,
  timeStart: logTimeStart,
  timeEnd: logTimeEnd,
  logMessage: logMessage
}







//
// import Raven from 'raven';
// import PrettyError from 'pretty-error';
// import HTTPStatus from 'http-status';
//
// import constants from '../config/constants';
// import APIError, { RequiredError } from './error';
//
//
// // eslint-disable-next-line no-unused-vars
// export default function logErrorService(err, req, res, next) {
//     if (!err) {
//         return new APIError(
//           'Error with the server!',
//           HTTPStatus.INTERNAL_SERVER_ERROR,
//           true,
//         );
//     }
//
//     if (isProd) {
//         const raven = new Raven.Client(constants.RAVEN_ID);
//         raven.captureException(err);
//     }
//
//     if (isDev) {
//         const pe = new PrettyError();
//         pe.skipNodeFiles();
//         pe.skipPackage('express');
//
//         // eslint-disable-next-line no-console
//         console.log(pe.render(err));
//     }
//
//     const error = {
//         message: err.message || 'Internal Server Error.',
//     };
//
//     if (err.errors) {
//         error.errors = {};
//         const { errors } = err;
//         if (Array.isArray(errors)) {
//             error.errors = RequiredError.makePretty(errors);
//         } else {
//             Object.keys(errors).forEach(key => {
//                 error.errors[key] = errors[key].message;
//             });
//         }
//     }
//
//     res.status(err.status || HTTPStatus.INTERNAL_SERVER_ERROR).json(error);
//
//     return next();
// }










//   cfg = require('../../config')
//
// if (!cfg.isDev) {
//     winston.remove(winston.transports.Console)
//     winston.add(winston.transports.Console, {
//         json: false,
//         timestamp: true,
//         handleExceptions: true
//     })
//     winston.add(winston.transports.DailyRotateFile, {
//         filename: cfg.logsDir + '/iloveopensource.log',
//         datePattern: '.yyyy-MM-dd',
//         handleExceptions: true
//     })
// }



// var fs  = require('fs-extra')
// var isThere = require('is-there');
// var path = require('path');
// var appDir = path.dirname(require.main.filename)


// if(isThere.sync(appDir + "/log/") === false){
//     fs.mkdirSync(appDir + "/log/");
//     fs.openSync(appDir + "/log/system.log", 'w');
//     fs.chmodSync(appDir + "/log/system.log", 0755);
// }

// logger.setLevels({
//     debug:0,
//     info: 1,
//     silly:2,
//     warn: 3,
//     error:4,
// });

// logger.addColors({
//     debug: 'green',
//     info:  'cyan',
//     silly: 'magenta',
//     warn:  'yellow',
//     error: 'red'
// });

// logger.remove(logger.transports.Console);
// logger.add(logger.transports.File, { filename:appDir + "/log/system.log"});
// logger.add(logger.transports.Console, { level: 'debug', colorize:true });










// if (app.get('env') == 'development') {
//     app.use(express.logger('dev'));
// } else {
//     app.use(express.logger('default'));
// }


// import expressWinston             from 'express-winston';
// import methodOverride             from 'method-override';
// import helmet                     from 'helmet';
// import expressStatusMonitor       from 'express-status-monitor';
//
//

// const isProd = env.NODE_ENV === 'production';
// const isTest = env.NODE_ENV === 'test';
// const isDev  = env.NODE_ENV === 'development';
//
//
// export default app => {
//     app.use(helmet());
//     app.use(expressStatusMonitor());
//     app.use(methodOverride());
//     if (isDev && !isTest) {
//         app.use(morgan('dev'));
//         expressWinston.requestWhitelist.push('body');
//         expressWinston.responseWhitelist.push('body');
//         app.use(
//           expressWinston.logger({
//               winstonInstance,
//               meta: true,
//               msg:
//                 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
//               colorStatus: true,
//           }),
//         );
//     }
// };
