import homeController       from '../controllers/homeController'
import helperInit           from './routesHelper'

// TODO: WHY USE IT?
// let helper = helperInit(null, null)

function initRoutes(app, passport) {

    //get routes
    // helper = helperInit(app, passport)

    // auth routes
    // initAuthRoutes(passport)

    //get api routes
    // initApiRoutes()

    app.get('/', homeController.test1)

    //home page
    // helper.get('/', homeController.home, {view: true})

    //all other routes are rendered as home (for client side routing)
    // helper.get('*', homeController.home, {view: true})
}

/**
 * Api Routes
 */
function initApiRoutes() {

    // helper.get('/api/enrollment/list', enrollmentController.getEnrollmentsByCourse, {view: true})
    // helper.get('/api/student/statistics', studentController.getStudentsStatistics)
    // helper.get('/api/student/list', studentController.getStudents)
    // helper.get('/api/student/getStudent', studentController.getStudent)
    // helper.post('/api/student/save', studentController.saveStudent)
    // helper.delete('/api/student/delete', studentController.deleteStudent)


    // app.get('/', require('./frontpage').get);
    // app.get('/login', require('./login').get);
    // app.post('/login', require('./login').post);
    // app.post('/logout', require('./logout').post);
    // app.get('/chat', checkAuth, require('./chat').get);
    // routes.get('/',authJwt,UserController.getList);

}

/**
 * Auth Routes
 */
function initAuthRoutes(passport) {
    // let authController = authControllerInit(passport)
    //
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

    // app.get('/login', userController.getLogin);
    // app.post('/login', userController.postLogin);
    // app.get('/logout', userController.logout);
    // app.get('/forgot', userController.getForgot);
    // app.post('/forgot', userController.postForgot);
    // app.get('/reset/:token', userController.getReset);
    // app.post('/reset/:token', userController.postReset);
    // app.get('/signup', userController.getSignup);
    // app.post('/signup', userController.postSignup);
    // app.get('/contact', contactController.getContact);
    // app.post('/contact', contactController.postContact);
    // app.get('/account', passportConf.isAuthenticated, userController.getAccount);
    // app.post('/account/profile', passportConf.isAuthenticated, userController.postUpdateProfile);
    // app.post('/account/password', passportConf.isAuthenticated, userController.postUpdatePassword);
    // app.delete('/account', passportConf.isAuthenticated, userController.deleteAccount);
    // app.get('/account/unlink/:provider', passportConf.isAuthenticated, userController.getOauthUnlink);
}

/**
 * OAuth authentication routes. (Sign in)
 */
function initApiAuthRoutes() {
  // app.get('/auth/facebook', passport.authenticate('facebook', secrets.facebook.authOptions));
  // app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login', failureFlash: true }), safeRedirectToReturnTo);
  // app.get('/auth/github', passport.authenticate('github', secrets.github.authOptions));
  // app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login', failureFlash: true }), safeRedirectToReturnTo);
  // app.get('/auth/google', passport.authenticate('google', secrets.google.authOptions));
  // app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login', failureFlash: true }), safeRedirectToReturnTo);
  // app.get('/auth/twitter', passport.authenticate('twitter', secrets.twitter.authOptions));
  // app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login', failureFlash: true }), safeRedirectToReturnTo);
  // app.get('/auth/linkedin', passport.authenticate('linkedin', secrets.linkedin.authOptions));
  // app.get('/auth/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login', failureFlash: true }), safeRedirectToReturnTo);
  //
  // app.get('/auth/instagram', passport.authenticate('instagram'));
  // app.get('/auth/instagram/callback', passport.authenticate('instagram', { failureRedirect: '/login' }), (req, res) => {
  //   res.redirect(req.session.returnTo || '/');
  // });
  // app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'public_profile'] }));
  // app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
  //   res.redirect(req.session.returnTo || '/');
  // });
  // app.get('/auth/github', passport.authenticate('github'));
  // app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
  //   res.redirect(req.session.returnTo || '/');
  // });
  // app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
  // app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  //   res.redirect(req.session.returnTo || '/');
  // });
  // app.get('/auth/twitter', passport.authenticate('twitter'));
  // app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), (req, res) => {
  //   res.redirect(req.session.returnTo || '/');
  // });
  // app.get('/auth/linkedin', passport.authenticate('linkedin', { state: 'SOME STATE' }));
  // app.get('/auth/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login' }), (req, res) => {
  //   res.redirect(req.session.returnTo || '/');
  // });
  //
  // app.get('/auth/foursquare', passport.authorize('foursquare'));
  // app.get('/auth/foursquare/callback', passport.authorize('foursquare', { failureRedirect: '/api' }), (req, res) => {
  //   res.redirect('/api/foursquare');
  // });
  // app.get('/auth/tumblr', passport.authorize('tumblr'));
  // app.get('/auth/tumblr/callback', passport.authorize('tumblr', { failureRedirect: '/api' }), (req, res) => {
  //   res.redirect('/api/tumblr');
  // });
  // app.get('/auth/steam', passport.authorize('openid', { state: 'SOME STATE' }));
  // app.get('/auth/steam/callback', passport.authorize('openid', { failureRedirect: '/login' }), (req, res) => {
  //   res.redirect(req.session.returnTo || '/');
  // });
  // app.get('/auth/pinterest', passport.authorize('pinterest', { scope: 'read_public write_public' }));
  // app.get('/auth/pinterest/callback', passport.authorize('pinterest', { failureRedirect: '/login' }), (req, res) => {
  //   res.redirect('/api/pinterest');
  // });
}

export default {
  init: initRoutes
}