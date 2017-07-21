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
