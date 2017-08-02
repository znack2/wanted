import { takeEvery,put,select }        from 'redux-saga/effects'
import responseService                 from './services/responseService'
import repositoryService               from './services/repositoryService'
import validationService               from './services/validationService'
import rules                           from '../../data/data/rules'


/**
 * @apiDefine User access only
 * This optional description belong to to the group admin.
 */

const name = `user`
const rules = rules()

const types = {
  GET_SAGA: `${ name }/GET_SAGA`,
  POST_SAGA: `${ name }/POST_SAGA`,
  PUT_SAGA: `${ name }/PUT_SAGA`,
  DELETE_SAGA: `${ name }/DELETE_SAGA`,
  REQUEST_SUCCESS: `${ name }/REQUEST_SUCCESS`,
  REQUEST_FAILED: `${ name }/REQUEST_FAILED`,
}

const defaultState = {
  responseService,
  repositoryService,
  validationService,
  rules,
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
function* processGet(request, res) {
    // let id = req.query.id;
    // let search = req.query.search;
    // let sortOrder = req.query.sortOrder;
    // let pageNumber = req.query.pageNumber;
    // let pageSize = req.query.pageSize;
    // let data = req.body.department

  try {
    const state = yield select()
    const repository = state.repositoryService
    const response = state.responseService
    
    const data = yield repository.getData({ request })
    yield response.sendData({ data })
    // return getResponse({data:data}, res)
    // yield put({ type: types.REQUEST_SUCCESS, payload: result })
  } catch (error) {
    yield put({ type: types.REQUEST_FAILED, payload: { error } })
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
function* processPost(request,res) {
  try {
    const state = yield select()
    const validate = state.validationService
    const rules = state.rules
    const repository = state.repositoryService
    yield validate.user({ rules,request })
    const data = yield repository.postData({ request })

    yield put({ type: types.REQUEST_SUCCESS, payload: data })
  } catch (error) {
    yield put({ type: types.REQUEST_FAILED, payload: { error } })
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
function* processPut(request, res) {
  try {
    const state = yield select()
    const validate = state.validationService
    const rules = state.rules
    const repository = state.repositoryService
    yield validate.user({ rules,request })
    const data = yield repository.putData({ request })

    yield put({ type: types.REQUEST_SUCCESS, payload: data })
  } catch (error) {
    yield put({ type: types.REQUEST_FAILED, payload: { error } })
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
function* processDelete(request, res) {
  try {
    const state = yield select()
    const repository = state.repositoryService
    const data = yield repository.deleteData({ request },res)

    yield put({ type: types.REQUEST_SUCCESS, payload: data })
  } catch (error) {
    yield put({ type: types.REQUEST_FAILED, payload: { error } })
  }
}

function* processResponse() {
  const state = yield select()
  const response = state.responseService

  yield response.sendSuccessMessage({ data })
}

function* processFailure() {
  const state = yield select()
  const response = state.responseService
  // getFailureMessage(err, res)
  yield response.sendFailureMessage({ data })
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
function* sagaFailure() {
  yield takeEvery(types.REQUEST_SUCCESS, processResponse)
}
function* sagaSuccess() {
  yield takeEvery(types.REQUEST_FAILED, processFailure)
}

const sagaList = [
  sagaGet(),
  sagaPost(),
  sagaPut(),
  sagaDelete(),
  sagaSuccess(),
  sagaFailure(),
]

export default {
  types,
  reducer,
  sagaList,
}