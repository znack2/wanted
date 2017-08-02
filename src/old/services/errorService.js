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

