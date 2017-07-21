import {Strategy}            from 'passport-facebook'
// import {OAuth2Strategy as Strategy} from 'passport-google-oauth';


import userRepository        from '../database/repositories/userRepository'
import authController        from './authController'



// let providerName = 'facebook';
let providerName = 'google';


export default function initPassport(passport,config) {
  authController.init(passport)

  // passport session setup
  // used to serialize the user for the session
  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  // used to deserialize the user
  passport.deserializeUser(function (id, done) {
    deserializeUser(id, done)
  })

  let strategySettings = {
    clientID: config.auth[ providerName ].clientID,
    clientSecret: config.auth[ providerName ].clientSecret,
    callbackURL: `${config.app.rootUrl}/auth/${providerName}/callback`,
    profileFields: ['id', 'emails', 'name']
  };

  passport.use(providerName, new Strategy(strategySettings, providerLogin));
}

function deserializeUser(id, done) {
  return userRepository.getById(id)
    .then((user) => {
      done(null, user)
    })
    .catch((err) => {
      done(err, null)
    })
}

async function providerLogin(token, refreshToken, profile, done) {
  try {
    let providerUser = await userRepository.findUserByAuthProviderId(profile.id, providerName);

    if (providerUser) {
      return done(null, providerUser);
    }

    let email = (profile.emails[0].value || '').toLowerCase();

    let user = await userRepository.findUserWithEmail(email);

    let profileData = {
      token,
      email,
      id: profile.id,
      name: profile.displayName
    };

    user = await userRepository.saveAuthProviderProfile(user, profileData, providerName);

    return done(null, user);

  } catch (err) {
    return done(err, null);
  }
}
