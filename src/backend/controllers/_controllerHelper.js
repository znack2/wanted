// import config, {getClientConfig} from '../config';

import { Response }         from 'express';
import Joi                  from 'joi';


import errorHelper          from '../helpers/errorHelper';
import AppError             from '../appError';


function sendFailureMessage(error, res) {
    const config =
    errorHelper.logError(error,config);
    let errorMessage = errorHelper.getErrorMessage(error,config);

    res.send({'status': 'failure', message: errorMessage});
}

function sendSuccessMessage(message, res) {
    res.send({status: 'success', 'message': message});
}

function sendData(data, res) {
    data.status = 'success';
    res.send(data);
}

function renderView(viewName, data, res) {
    if (!data) data = {};

    data.appName = config.app.appName;
    data.config = getClientConfig();

    res.render(viewName, data);
}

// function loadSchema(data, schema) {
//     let validationOptions = {
//         stripUnknown: true
//     };
//
//     return new Promise(function (resolve, reject) {
//         Joi.validate(data, schema, validationOptions, function (err, val) {
//             if (!err) return resolve(val);
//
//             let error = null;
//
//             if (err.name !== 'ValidationError') {
//                 error = new Error('Unsupported Validation Error');
//                 return reject(err);
//             }
//
//             let validationMessage = err.details[0].message;
//
//             error = new AppError('app', 'request_validation', {
//                 data: {validationMessage}
//             });
//
//             return reject(error);
//         });
//     });
// }

export default {
  sendFailureMessage,
  sendSuccessMessage,
  sendData,
  renderView,
  // loadSchema
};