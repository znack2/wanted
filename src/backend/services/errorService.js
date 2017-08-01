// import createLog            from './createLog'
import textValue            from '../helpers/textValueHelper'


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

export default {
  // logError,
  getErrorMessage
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

