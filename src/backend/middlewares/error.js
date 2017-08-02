/*
 * Error handler Middleware
 * =============================================================================
 */
function initErrorHandling(app,config) {
  // app.use(errorHandler());
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
  initErrorHandling,
}