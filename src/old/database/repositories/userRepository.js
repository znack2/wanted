import { clone, find }      from 'lodash'
import Promise              from 'bluebird'
import bcrypt               from 'bcrypt-nodejs'
import crypto               from 'crypto'

// import database             from '../database'
// import AppError             from '../../helpers/appError'
// import { userModel }         from '../models'

let userModel = init(db)


function init(db) {
  return db.models.User
}
/*
*  GET
*/
function getUsers() {
    return userModel.findAll()
}

function getById(id) {
    return userModel.findById(id)
}

function deserializeUser(id,done) {
    return getById(id)
      .then((user) => {
        done(null, user)
      })
      .catch((err) => {
        done(err, null)
      })

    // User.findOne({_id: obj._id}, function (err, user) {
    //   done(err, user);
    // })
}

function getLocalUserByEmail(email) {
    return findUserWithEmail(email)
        .then((user) => {
            let noLocalProfile = !user || !user.profile.local

            if (noLocalProfile) return null

            return user
        })
}

function findUserWithEmail(email) {
    return userModel.findOne({where: {email: email}})
}

function getUserByActivationToken(token) {
  return getUsers()
    .then((users) => {
      let findUser = find(users, (user) => {
        return user.profile.local &&
          user.profile.local.activation.token === token
      })

      return findUser
    })
}

function findUserByAuthProviderId(id, provider) {
  return getUsers()
    .then((users) => {
      let findUser = find(users, (user) => {
        return user.profile[provider] &&
          user.profile[provider].id === id
      })

      return findUser
    })
}

function getUserByResetToken(token) {
  return getUsers()
    .then((users) => {
      let findUser = find(users, (user) => {
        return user.profile.local &&
          user.profile.local.reset.token === token
      })

      return findUser
    })
}
/*
 *  POST/PUT
 */

function saveLocalAccount(user, email, password) {
    let localProfile = {}

    localProfile.email = email
    localProfile.password = userModel.generateHash(password)

    let activationToken = generateActivationToken()
    localProfile.activation = {
        token: activationToken,
        created: new Date()
    }

    localProfile.isActivated = false

    if (user) {
        user.email = email
        user.profile.local = localProfile

        return updateUser(user)
    } else {
        return userModel.create({
            email: email,
            profile: {
                local: localProfile
            }
        })
    }
}

function refreshActivationToken(userId) {
    return getById(userId)
        .then((user) => {
            if (!user) throw new AppError('auth', 'user_not_found')

            user.profile.local.activation = {
                token: generateActivationToken(),
                created: new Date().toString()
            }

            return updateUser(user)
        })
}

function activateUser(userId) {
    return getById(userId)
        .then((user) => {
            if (!user) throw new AppError('auth', 'user_not_found')

            let localProfile = user.profile.local

            localProfile.activation = undefined
            localProfile.isActivated = true

            return updateUser(user)
        })
}

function comparePasswords(userId, password) {
    return getById(userId)
        .then((user) => {
            let actualPassword = user.profile.local.password

            return bcrypt.compareSync(password, actualPassword)
        })
}

function saveAuthProviderProfile(user, profileData, provider) {
    if (user) {
        user.email = profileData.email
        user.profile[provider] = profileData

        return updateUser(user)
    } else {
        return userModel.create({
            email: profileData.email,
            profile: {
                [provider]: profileData
            }
        })
    }
}

function resetPassword(userId) {
    return getById(userId)
        .then((user) => {
            if (!user) throw new AppError('Cannot find user by Id')

            user.profile.local.reset = {
                token: generateActivationToken(),
                created: new Date().toString()
            }

            return updateUser(user)
        })
}

function refreshResetToken(userId) {
    return getById(userId)
        .then((user) => {
            if (!user) throw new AppError('Cannot find user')

            user.profile.local.reset = {
                token: generateActivationToken(),
                created: new Date().toString()
            }

            return updateUser(user)
        })
}

function updateUserPassword(userId, password) {
    return getById(userId)
        .then((user) => {
            if (!user) throw new AppError('Cannot find user')

            let localProfile = user.profile.local

            localProfile.reset = undefined
            localProfile.password = userModel.generateHash(password)

            return updateUser(user)
        })
}

function generateActivationToken() {
    let token = crypto.randomBytes(32).toString('hex')
    return token
}

function updateUser(user) {
    //to notify sequelize that JSON field should be updated
    user.profile = clone(user.profile)

    return user.save()
}

export default {
  // init,
  getUsers,
  getById,
  getLocalUserByEmail,
  findUserWithEmail,
  saveLocalAccount,
  getUserByActivationToken,
  refreshActivationToken,
  activateUser,
  comparePasswords,
  findUserByAuthProviderId,
  saveAuthProviderProfile,
  resetPassword,
  getUserByResetToken,
  refreshResetToken,
  updateUserPassword
}