import passport           from 'passport'
import flash              from 'connect-flash'
// import flash              from 'express-flash'

import connectAuth        from '../tasks/connectAuth'


function initAuth(app,config) {
    app.use(flash())
    connectAuth(passport,config)
    app.use(passport.initialize())
    app.use(passport.session()) // persistent login sessions

    return passport
}

function initLoggedIn(app,config) {
    //exposing current user
    app.use(function (req, res, next) {
        req.realIP = req.headers['x-real-ip'] || req.connection.remoteAddress
        res.locals.isLoggedIn = req.isAuthenticated()
        res.locals.loggedUser = req.user
        if (req.session.isNewUser) {
            res.locals.isNewUser = true
            req.session.isNewUser = null
        }
        next();
    });
}

function initAdmin(app,config) {
    
}

export default {
    initAuth,
    initLoggedIn,
    initAdmin,
}






