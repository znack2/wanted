import { graphiqlExpress }  from 'apollo-server-express'


import homeController       from '../controllers/homeController'
import authController       from '../controllers/authController'
import helperInit           from '../helpers/routesHelper'


function initRoutes(app,passport) {
    //get routes
    const helper = helperInit(app,passport)
    // auth routes
    initAuthRoutes(passport)
    //get api routes
    initTestRoutes(helper)
    //get api routes
    // initGraphQLRoutes(helper)
    //get api routes
    initApiRoutes(helper)

    //all other routes are rendered as home (for client side routing)
    // helper.get('*', homeController.home, {view: true})
}
/**
 * Test Routes
 * =============================================================================
 */
function initTestRoutes(helper) {
    helper.get('/api/test_get', homeController.test_get)
    helper.get('/api/test_post', homeController.test_post)
    helper.get('/api/test_put', homeController.test_put)
}
/**
 * Api Routes
 * =============================================================================
 */
function initApiRoutes(helper) {
    // helper.get('/api/enrollment/list', enrollmentController.getEnrollmentsByCourse, {view: true})
    // helper.get('/send/basic', function (req, res) {
    //   var token = req.query.token
    //   console.log('token = ' + token)
    //   sendPush(token, res)
    // })

    // helper.post('/users/:user_id/set_token', requireJwt, TodosController.checkValidUser, TodosController.setToken]);
    // helper.get('/users/:user_id/send_notification', TodosController.sendNotification]);
}
/**
 * Auth Routes
 * =============================================================================
 */
function initAuthRoutes(passport) {
    // let authController = authControllerInit(passport)

    // helper.get('/', require('./frontpage').get)
    // helper.get('/login', require('./login').get)
    // helper.post('/login', require('./login').post)
    // helper.post('/logout', require('./logout').post)
    // helper.get('/chat', checkAuth, require('./chat').get)
    // routes.get('/',authJwt,UserController.getList)

    // helper.get('/activate/:token', authController.activate, {auth: false})
    // helper.get('/login', authController.logIn, {auth: false, view: true})
    // helper.post('/login', authController.logInPost, {auth: false, view: true})
    // helper.get('/signup', authController.signUp, {auth: false, view: true})
    // helper.post('/signup', authController.signUpPost, {auth: false, view: true})
    // helper.get('/logout', authController.logOut, {auth: false, view: true})
    // helper.get('/passwordForgot', authController.forgotPassword, {auth: false, view: true})
    // helper.post('/passwordForgot', authController.forgotPasswordPost, {auth: false, view: true})
    // helper.get('/passwordReset/:token', authController.resetPassword, {auth: false, view: true})
    // helper.post('/passwordReset/:token', authController.resetPasswordPost, {auth: false, view: true})

    // helper.get('/login', userController.getLogin)
    // helper.post('/login', userController.postLogin)
    // helper.get('/logout', userController.logout)
    // helper.get('/forgot', userController.getForgot)
    // helper.post('/forgot', userController.postForgot)
    // helper.get('/reset/:token', userController.getReset)
    // helper.post('/reset/:token', userController.postReset)
    // helper.get('/signup', userController.getSignup)
    // helper.post('/signup', userController.postSignup)
    // helper.get('/contact', contactController.getContact)
    // helper.post('/contact', contactController.postContact)
    // helper.get('/account', passportConf.isAuthenticated, userController.getAccount)
    // helper.post('/account/profile', passportConf.isAuthenticated, userController.postUpdateProfile)
    // helper.post('/account/password', passportConf.isAuthenticated, userController.postUpdatePassword)
    // helper.delete('/account', passportConf.isAuthenticated, userController.deleteAccount)
    // helper.get('/account/unlink/:provider', passportConf.isAuthenticated, userController.getOauthUnlink)
}

export default {
  initRoutes
}