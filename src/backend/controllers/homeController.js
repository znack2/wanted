import Joi                      from 'joi'
// import HTTPStatus from 'http-status'


import helper                   from '../helpers/controllerHelper'
// import { filteredBody } from '../utils/filteredBody'


/**
* @apiDefine User access only
* This optional description belong to to the group admin.
*/

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

/**
 * @api {get} /user/:id Read data of a User
 * @apiVersion 0.1.0
 * @apiName GetUser
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription Compare Verison 0.3.0 with 0.2.0 and you will see the green markers with new items in version 0.3.0 and red markers with removed items since 0.2.0.
 *
 * @apiParam {String} id The Users-ID.
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/4711
 *
 * @apiSuccess {String}   id            The Users-ID.
 * @apiSuccess {Date}     registered    Registration Date.
 * @apiSuccess {Date}     name          Fullname of the User.
 * @apiSuccess {String[]} nicknames     List of Users nicknames (Array of Strings).
 * @apiSuccess {Object}   profile       Profile data (example for an Object)
 * @apiSuccess {Number}   profile.age   Users age.
 * @apiSuccess {String}   profile.image Avatar-Image.
 * @apiSuccess {Object[]} options       List of Users options (Array of Objects).
 * @apiSuccess {String}   options.name  Option Name.
 * @apiSuccess {String}   options.value Option Value.
 *
 * @apiError NoAccessRight Only authenticated Admins can access the data.
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */

function test_get(req, res) {
  // return res.sendData({}, res)
  // res.status(200).send('privet')
  return helper.sendData({data: 'hello'}, res)
}

/**
 * @api {post} /user Create a new User
 * @apiVersion 0.3.0
 * @apiName PostUser
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription In this case "apiUse" is defined and used.
 * Define blocks with params that will be used in several functions, so you dont have to rewrite them.
 *
 * @apiParam {String} name Name of the User.
 *
 * @apiSuccess {String} id         The new Users-ID.
 *
 * @apiUse User
 */
function test_post(req, res) {

  try {
    return helper.sendData({data: 'hello'}, res)
    //render template
    // return helper.renderView('home', {}, res)
  } catch (err) {
    helper.sendFailureMessage(err, res)
  }
}

/**
 * @api {put} /user/:id Change a new User
 * @apiVersion 0.3.0
 * @apiName PutUser
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription This function has same errors like POST /user, but errors not defined again, they were included with "apiUse"
 *
 * @apiParam {String} name Name of the User.
 *
 * @apiUse User
 */
function test_put(req, res) {


  try {
    return helper.sendData({data: 'hello'}, res)
    //render template
    // return helper.renderView('home', {}, res)
  } catch (err) {
    helper.sendFailureMessage(err, res)
  }
}


export default {
  test_get,
  test_post,
  test_put,
}