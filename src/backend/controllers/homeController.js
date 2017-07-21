import Joi                      from 'joi'
// import HTTPStatus from 'http-status'


import helper                   from '../helpers/controllerHelper'
// import departmentRepository     from '../repositories/userRepository'
// import { User }                 from '../models'
// import { filteredBody } from '../utils/filteredBody'


// export const validation = {
//   create: {
//     body: {
//       title: Joi.string().min(3).required(),
//       text: Joi.string().required(),
//       email: Joi.string().email().required(),
//       password: Joi.string()
//         .min(6)
//         .regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)
//         .required(),
//       username: Joi.string().min(3).max(20).required(),
//     },
//   },
//   update: {
//     body: {
//       title: Joi.string().min(3),
//       text: Joi.string(),
//     },
//   },
// }


function test1(req, res) {
  // return res.sendData({}, res)
  // res.status(200).send('privet')
  return helper.sendData({data: 'hello'}, res)
}

function test2(req, res) {
  try {
    return helper.sendData({data: 'hello'}, res)
    //render template
    // return helper.renderView('home', {}, res)
  } catch (err) {
    helper.sendFailureMessage(err, res)
  }
}

export default {
  test1,
  test2,
}