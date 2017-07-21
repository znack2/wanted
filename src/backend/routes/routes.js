import homeController       from '../controllers/homeController'
import authController       from '../controllers/authController'
import OauthController      from '../controllers/OauthController'
import helperInit           from '../helpers/routesHelper'

// TODO: WHY USE IT?
// let helper = helperInit(null, null)

function initRoutes(helper, passport) {

    //get routes
    helper = helperInit(helper, passport)

    // auth routes
    initAuthRoutes(passport)

    //get api routes
    initApiRoutes(helper)

    //all other routes are rendered as home (for client side routing)
    // helper.get('*', homeController.home, {view: true})
}

/**
 * Api Routes
 */
function initApiRoutes(helper) {

    // helper.get('/api/enrollment/list', enrollmentController.getEnrollmentsByCourse, {view: true})
    // helper.get('/api/student/statistics', studentController.getStudentsStatistics)
    // helper.get('/api/student/list', studentController.getStudents)
    // helper.get('/api/student/getStudent', studentController.getStudent)
    // helper.post('/api/student/save', studentController.saveStudent)
    // helper.delete('/api/student/delete', studentController.deleteStudent)


    // helper.get('/', require('./frontpage').get)
    // helper.get('/login', require('./login').get)
    // helper.post('/login', require('./login').post)
    // helper.post('/logout', require('./logout').post)
    // helper.get('/chat', checkAuth, require('./chat').get)
    // routes.get('/',authJwt,UserController.getList)

    helper.get('/api/test1', homeController.test1)

    //home page
    // helper.get('/', homeController.home, {view: true})
}

/**
 * Auth Routes
 */
function initAuthRoutes(passport) {
    // let authController = authControllerInit(passport)

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
    //
    // helper.get('/auth/google', authController.google, {auth: false, view: true})
    // helper.get('/auth/google/callback', authController.googleCallback, {auth: false, view: true})
    //
    // helper.get('/auth/facebook', authController.facebook, {auth: false, view: true})
    // helper.get('/auth/facebook/callback', authController.facebookCallback, {auth: false, view: true})

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

/**
 * OAuth authentication routes. (Sign in)
 */
function initApiAuthRoutes(helper) {
  // helper.get('/auth/facebook', passport.authenticate('facebook', secrets.facebook.authOptions))
  // helper.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login', failureFlash: true }), safeRedirectToReturnTo)
  // helper.get('/auth/github', passport.authenticate('github', secrets.github.authOptions))
  // helper.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login', failureFlash: true }), safeRedirectToReturnTo)
  // helper.get('/auth/google', passport.authenticate('google', secrets.google.authOptions))
  // helper.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login', failureFlash: true }), safeRedirectToReturnTo)
  // helper.get('/auth/twitter', passport.authenticate('twitter', secrets.twitter.authOptions))
  // helper.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login', failureFlash: true }), safeRedirectToReturnTo)
  // helper.get('/auth/linkedin', passport.authenticate('linkedin', secrets.linkedin.authOptions))
  // helper.get('/auth/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login', failureFlash: true }), safeRedirectToReturnTo)
  //
  // helper.get('/auth/instagram', passport.authenticate('instagram'))
  // helper.get('/auth/instagram/callback', passport.authenticate('instagram', { failureRedirect: '/login' }), (req, res) => {
  //   res.redirect(req.session.returnTo || '/')
  // })
  // helper.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'public_profile'] }))
  // helper.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
  //   res.redirect(req.session.returnTo || '/')
  // })
  // helper.get('/auth/github', passport.authenticate('github'))
  // helper.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
  //   res.redirect(req.session.returnTo || '/')
  // })
  // helper.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }))
  // helper.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  //   res.redirect(req.session.returnTo || '/')
  // })
  // helper.get('/auth/twitter', passport.authenticate('twitter'))
  // helper.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), (req, res) => {
  //   res.redirect(req.session.returnTo || '/')
  // })
  // helper.get('/auth/linkedin', passport.authenticate('linkedin', { state: 'SOME STATE' }))
  // helper.get('/auth/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login' }), (req, res) => {
  //   res.redirect(req.session.returnTo || '/')
  // })
  //
  // helper.get('/auth/foursquare', passport.authorize('foursquare'))
  // helper.get('/auth/foursquare/callback', passport.authorize('foursquare', { failureRedirect: '/api' }), (req, res) => {
  //   res.redirect('/api/foursquare')
  // })
  // helper.get('/auth/tumblr', passport.authorize('tumblr'))
  // helper.get('/auth/tumblr/callback', passport.authorize('tumblr', { failureRedirect: '/api' }), (req, res) => {
  //   res.redirect('/api/tumblr')
  // })
  // helper.get('/auth/steam', passport.authorize('openid', { state: 'SOME STATE' }))
  // helper.get('/auth/steam/callback', passport.authorize('openid', { failureRedirect: '/login' }), (req, res) => {
  //   res.redirect(req.session.returnTo || '/')
  // })
  // helper.get('/auth/pinterest', passport.authorize('pinterest', { scope: 'read_public write_public' }))
  // helper.get('/auth/pinterest/callback', passport.authorize('pinterest', { failureRedirect: '/login' }), (req, res) => {
  //   res.redirect('/api/pinterest')
  // })
}

/**
 * Init Auth from server
 */
function initPassport(passport,config) {
  OauthController.initPassport(passport,config)
}

export default {
  initPassport,
  initRoutes
}