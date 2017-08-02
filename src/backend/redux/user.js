import { takeEvery,put,select }        from 'redux-saga/effects'
import responseService                 from './services/responseService'
import getFailureMessage               from './services/getFailureMessage'
import repositoryService               from './services/repositoryService'
import validationService               from './services/validationService'

/**
 * @apiDefine User access only
 * This optional description belong to to the group admin.
 */

const name = `user`

export const types = {
  GET_SAGA: `${ name }/GET_SAGA`,
  POST_SAGA: `${ name }/POST_SAGA`,
  PUT_SAGA: `${ name }/PUT_SAGA`,
  DELETE_SAGA: `${ name }/DELETE_SAGA`,
}

const defaultState = {
  responseService,
  validationService
}

const reducer = (state = defaultState, action) => {
  return state
}

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

function* processGet() {


    //get requests
    // let id = req.query.id;
    // let search = req.query.search;
    // let sortOrder = req.query.sortOrder;
    // let pageNumber = req.query.pageNumber;
    // let pageSize = req.query.pageSize;

    // repository
    // let enrollments = await enrollmentRepository.getEnrollmentsByCourseId(courseId);
    // let department = await departmentRepository.getDepartmentById(id);
    // let result = await studentRepository.getStudents(search, sortOrder, pageNumber, pageSize);

    // const data = getData(req)

  try {
    //validate request
    //get data from db
    //return data through transformer
    const state = yield select()
    const response = state.responseService
    const validation = state.validationService
    const repository = state.repositoryService

    yield validation.init({ request })
    const data = yield repository.init({ request })
    yield response.init({ data })
    // return getResponse({data:data}, res)
    // yield put({ type: types.EMAIL_SUCCESS, payload: result })
  } catch (error) {
    // getFailureMessage(err, res)
    // yield put({ type: types.EMAIL_FAILED, payload: { error } })
  }
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

function* processPost() {

  // let data = req.body.department
  //
  // let schema = {
  //   id: Joi.number(),
  //   name: Joi.string().required(),
  //   budget: Joi.number().required(),
  //   startDate: Joi.date().format(config.format.date),
  //   instructorId: Joi.number().required(),
  //   id: Joi.number(),
  //   firstName: Joi.string().required(),
  //   lastName: Joi.string().required(),
  //   hireDate: Joi.date().format(config.format.date),
  //   courses: Joi.array().items(
  //     Joi.object().keys({
  //       id: Joi.number().required()
  //     })
  //   ),
  //   officeAssignment: Joi.object().keys({
  //     id: Joi.number(),
  //     location: Joi.string().allow('')
  //   })
  // }


  // let result = null
  //
  // let department = await helper.loadSchema(data, schema)
  // if (department.id) {
  //   result = await departmentRepository.updateDepartment(department)
  // } else {
  //   result = await departmentRepository.addDepartment(department)
  // }
  // await officeAssignmentRepository.saveOfficeAssignment(instructor.officeAssignment, result.id)
  // department = await departmentRepository.getDepartmentById(result.id)



  try {
    //validate request
    //store data to db
    //return response ok
    const state = yield select()
    const response = state.responseService
    const validation = state.validationService
    const repository = state.repositoryService

    yield validation.init({ request })
    const data = yield repository.init({ request })
    yield response.init({ data })
    // return getResponse({data:data}, res)
    // yield put({ type: types.EMAIL_SUCCESS, payload: result })
  } catch (error) {
    // getFailureMessage(err, res)
    // yield put({ type: types.EMAIL_FAILED, payload: { error } })
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
async function processPut(req, res) {
  try {
    //validate request
    //store data to db
    //return response ok
    const state = yield select()
    const response = state.responseService
    const validation = state.validationService
    const repository = state.repositoryService

    yield validation.init({ request })
    const data = yield repository.init({ request })
    yield response.init({ data })
    // return getResponse({data:data}, res)
    // yield put({ type: types.EMAIL_SUCCESS, payload: result })
  } catch (error) {
    // getFailureMessage(err, res)
    // yield put({ type: types.EMAIL_FAILED, payload: { error } })
  }
}


/**
 * @api {delete} /users/:id Remove a task
 * @apiGroup Tasks
 * @apiParam {id} id Task id
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 204 No Content
 * @apiErrorExample {json} Delete error
 *    HTTP/1.1 500 Internal Server Error
 */
async function processDelete(req, res) {

  // let id = req.body.id;

  // await departmentRepository.deleteDepartment(id);
  // await officeAssignmentRepository.deleteOfficeAssignmentByInstructorId(id);
  // await instructorRepository.deleteInstructor(id);


  try {
    //validate request
    //store data to db
    //return response ok
    const state = yield select()
    const response = state.responseService
    const validation = state.validationService
    const repository = state.repositoryService

    yield validation.init({ request })
    const data = yield repository.init({ request })
    yield response.init({ data })
    // return getResponse({data:data}, res)
    // yield put({ type: types.EMAIL_SUCCESS, payload: result })
  } catch (error) {
    // getFailureMessage(err, res)
    // yield put({ type: types.EMAIL_FAILED, payload: { error } })
  }
}



function* sagaGet() {
  yield takeEvery(types.GET_SAGA, processGet)
}
function* sagaPost() {
  yield takeEvery(types.POST_SAGA, processPost)
}
function* sagaPut() {
  yield takeEvery(types.PUT_SAGA, processPut)
}
function* sagaDelete() {
  yield takeEvery(types.DELETE_SAGA, processDelete)
}

const sagaList = [
  sagaGet(),
  sagaPost(),
  sagaPut(),
  sagaDelete(),
]

export default {
  types,
  reducer,
  sagaList,
}