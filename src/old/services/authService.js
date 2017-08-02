import { Strategy }         from 'passport-facebook'
// import {OAuth2Strategy as Strategy} from 'passport-google-oauth'
import createLog            from '../tasks/createLog'
import sendEmail            from '../tasks/sendEmail'
import sendError            from '../tasks/sendError'
import connectDB            from '../tasks/connectDB'

import authController       from '../controllers/authController'
import textValue            from './textValueHelper'

// let providerName = 'facebook'
let providerName = 'google'


function initPassport(passport,config) {
  authController.init(passport)

  // passport session setup
  // used to serialize the user for the session
  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })
  // used to deserialize the user
  passport.deserializeUser(function (id, done) {
    connectDB('deserializeUser',id,done)
  })
  
  let strategySettings = {
    clientID: config.auth[ providerName ].clientID,
    clientSecret: config.auth[ providerName ].clientSecret,
    callbackURL: `${config.app.rootUrl}/auth/${providerName}/callback`,
    profileFields: ['id', 'emails', 'name']
  }
  passport.use(providerName, new Strategy(strategySettings, providerLogin))
}

async function providerLogin(token, refreshToken, profile, done) {
  try {
    let providerUser = await connectDB('findUserByAuthProviderId',profile.id, providerName)

    if (providerUser) {
      return done(null, providerUser)
    }

    let email = (profile.emails[0].value || '').toLowerCase()

    let user = await connectDB('findUserWithEmail',email)

    let profileData = {
      token,
      email,
      id: profile.id,
      name: profile.displayName
    }

    user = await connectDB('saveAuthProviderProfile',user, profileData, providerName)

    return done(null, user)

  } catch (err) {
    return done(err, null)
  }
}

function renderView(viewName, viewModel, req, res) {
  let statusMessage = null

  let flashArray = req.flash('statusMessage')
  if (flashArray && flashArray.length > 0) {
    statusMessage = flashArray[0]
  }

  if (statusMessage) {
    viewModel.statusMessage = statusMessage
  }

  return controllerHelper.renderView(viewName, viewModel, res)
}

function setStatusMessage(req, message, type) {
  if (!type) {
    type = 'error'
  }

  let uiClass = ''

  switch (type) {
    case 'error':
      uiClass = 'alert-danger'
      break
    case 'success':
      uiClass = 'alert-success'
      break
    case 'info':
      uiClass = 'alert-info'
      break
    case 'warning':
      uiClass = 'alert-warning'
      break
    default:
      throw new AppError(`Not supported status message type: '${type}'`)
  }

  let statusMessage = {
    message: message,
    uiClass: uiClass
  }

  req.flash('statusMessage', statusMessage)
}

function redirectToLogIn(message, type, req, res) {
  setStatusMessage(req, message, type)
  res.redirect('/login')
}

function sendAuthErrorMessage(message, done, req) {
  return done(null, false, setStatusMessage(req, message))
}

function sendAuthMessage(message, type, done, req) {
  if (message) return done(null, false, setStatusMessage(req, message, type))

  return done()
}

function handleError(error) {

  createLog({ error })
  sendError({ error })

  let errorMessage = sendError.getErrorMessage(error)

  if (!errorMessage) return 'Auth Error' //Cannot find error description

  return errorMessage
}

export default {
  initPassport,
  renderView,
  setStatusMessage,
  handleError,
  redirectToLogIn,
  sendAuthErrorMessage,
  sendAuthMessage,
}




//var 2
// import GitHubStrategy from 'passport-github/Strategy'
//
// import { User } = './model'
// import cfg from '../../config'
//
// var callbackUrl = cfg.fullUrl() + '/auth/github/callback'
//
// passport.use(new GitHubStrategy({
//     clientID: cfg.github.clientId,
//     clientSecret: cfg.github.clientSecret,
//     callbackURL: callbackUrl
//   },
//   function (accessToken, refreshToken, profile, done) {
//     User.findOneAndUpdate({ 'github.id': profile.id }, { $set: {authToken: accessToken}}, function (err, user) {
//       if (user) return done(err, user)
//
//       user = new User({
//         name: profile.displayName,
//         email: profile._json.email,
//         username: profile.username,
//         displayName: profile.username,
//         provider: 'github',
//         github: profile._json,
//         type: profile._json.type,
//         authToken: accessToken
//       })
//
//       user.register(function (err) {
//         if (err) console.error(err)
//         return done(err, user, true)
//       })
//     })
//   }
// ))
