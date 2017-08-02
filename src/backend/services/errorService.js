// import createLog            from './createLog'
import textValue               from '../helpers/textValueHelper'
import { isString, merge }     from 'lodash'


function getErrorMessage(error,config) {
    if (!error) return ''

    if (error.isAppError) {
        if (!error.message) {
            let message = textValue.error(error.type, error.code, error.data)

            if (!message) message = `Cannot find error message for type:${error.type} code:${error.code}`

            error.message = message
        }

        if (error.uiShow) return error.message
    }

    if (config.app.isDevLocal) {
        return error.message || error
    }

    return 'Server Error'
}


function AppError(payload, option = 500){

    const { data } = payload
    const { args } = option

    Error.captureStackTrace(this, this.constructor)

    //signature type, code, options
    if (isString(args[0]) && isString(args[1])) {
        this.type = args[0]
        this.code = args[1]
        merge(this, args[2])
    }
    //signature message, options
    else if (isString(args[0])) {
        this.message = args[0]
        merge(this, args[1])
    } else {
        throw new Error('Unsupported AppError signature')
    }
}

export default {
  // logError,
  getErrorMessage,
    AppError
}








// import httpStatus from 'http-status';
//
// class ExtendableError extends Error {
//     constructor(message, status, isPublic) {
//         super(message);
//         this.name = this.constructor.name;
//         this.message = message;
//         this.status = status;
//         this.isPublic = isPublic;
//         this.isOperational = true;
//         Error.captureStackTrace(this, this.constructor.name);
//     }
// }
//
// class APIError extends ExtendableError {
//     constructor(
//       message,
//       status = httpStatus.INTERNAL_SERVER_ERROR,
//       isPublic = false,
//     ) {
//         super(message, status, isPublic);
//     }
// }
//
// export class RequiredError {
//     static makePretty(errors) {
//         return errors.reduce((obj, error) => {
//             const nObj = obj;
//             nObj[error.field] = error.messages[0].replace(/"/g, '');
//             return nObj;
//         }, {});
//     }
// }




//send HHTPERROR
// module.exports = function(req, res, next) {
//   res.sendHttpError = function(error) {
//     res.status(error.status)
//     if (res.req.headers['x-requested-with'] == 'XMLHttpRequest') {
//       res.json(error)
//     } else {
//       res.render("error", {error: error})
//     }
//   }
//   next()
// }

// app.use(function (req, res, next) {
//   res.status(404);
//   logger.warn('404 not found: %s', req.originalUrl)
//
//   if (req.accepts('html')) {
//     res.render('404');
//     return;
//   }
//
//   if (req.accepts('json')) {
//     res.send({ error: 'Not found' });
//     return;
//   }
//
//   res.type('txt').send('Not found');
// });
//
// app.use(function (err, req, res, next) {
//   res.status(err.status || 500);
//   logger.warn('Route Error: %s', req.originalUrl, err)
//
//   if (req.accepts('html')) {
//     return res.render('500', { error: err });
//   }
//
//   if (req.accepts('json')) {
//     return res.send({ error: err });
//   }
// });
