import store                from '../redux/store'
import user                 from '../redux/user'
import doc                  from '../redux/doc'


function initRoutes(router,passport) {
    //get api routes
    initTestRoutes(router)
    initDocRoutes(router)
    initAuthRoutes(router,passport)
}
/**
 * Test Routes
 * =============================================================================
 */
function initTestRoutes(router) {
    router.get('/api/test_get', store.dispatch({ type: user.types.GET_SAGA }))
    router.get('/api/test_post', store.dispatch({ type: user.types.POST_SAGA }))
    router.get('/api/test_put', store.dispatch({ type: user.types.PUT_SAGA }))
    router.get('/api/test_delete', store.dispatch({ type: user.types.DELETE_SAGA }))
}

function initDocRoutes(router) {
    router.get('/api/docs', store.dispatch({ type: doc.types.DOC_SAGA }))
}

function initAuthRoutes(router,passport) {
  
}

export default {
  initRoutes
}