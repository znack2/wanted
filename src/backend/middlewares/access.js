import { isUndefined }                   from 'lodash'


let app           = null
let passport      = null
// const config = 
  
function init(expressApp, passportAuth) {
  app = expressApp
  passport = passportAuth
  return {
    app,
    isLoggedIn,
    get: httpGet,
    post: httpPost,
    put: httpPut,
    delete: httpDelete
  }
}

function httpGet(path, handler, accessMode) {
    const args = getRouteArguments(path, handler, accessMode)
    app.get.apply(app, args)
}

function httpPost(path, handler, accessMode) {
    const args = getRouteArguments(path, handler, accessMode)
    app.post.apply(app, args)
}

function httpPut(path, handler, accessMode) {
    const args = getRouteArguments(path, handler, accessMode)
    app.put.apply(app, args)
}

function httpDelete(path, handler, accessMode) {
    const args = getRouteArguments(path, handler, accessMode)
    app.delete.apply(app, args)
}

function getRouteArguments(path, handler, accessMode) {
    let result = []

    accessMode = normalizeAccessMode(accessMode)

    result.push(path)
    let accessHandlers = getAccessCheck(accessMode)
    result = result.concat(accessHandlers)
    result.push(handler)

    return result
}

function normalizeAccessMode(accessMode) {
    if (!accessMode) {
        return {
            auth: true,
            view: false
        }
    }

    if (isUndefined(accessMode.auth)) {
        accessMode.auth = true
    }

    return accessMode
}

function getAccessCheck(accessMode) {
    if (!accessMode.auth) return []

    if (accessMode.view) {
        return [isLoggedInView]
    }
    else {
        return [isLoggedIn]
    }
}

function isLoggedIn(req, res, next) {
    return next()
    // if (!config.auth.useAuth) return next()

    if (req.isAuthenticated()) return next()

    res.send(401, 'Unauthorized')

  //var 2
  // if (req.session.user) return next()
  //return next(new HttpError(401, "Вы не авторизованы"))
}

function isLoggedInView(req, res, next) {
    // if (!config.auth.useAuth) return next()
    return next()

    if (req.isAuthenticated()) return next()

    res.redirect('/login')
}

export default init