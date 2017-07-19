import store                from '../redux/store'
import app                  from '../redux/app'

/*
*  TODO: Learn what is this
*/
// process.on('uncaughtException', function (err) {
//     let stack = err.stack
//     console.log(`Uncaught exception. ${err}`)
// })
/*
 *  TODO: Learn what is this
 */
// process.on('unhandledRejection', function (err) {
//     console.log(err)
// })


/*
 *  START SERVER
 */
// store.dispatch({ type: types.LOAD_SAGA })
// store.dispatch({ type: types.LOAD, { PORT: 3000 } })
store.dispatch({ type: app.types.START_SAGA })
// store.dispatch(appStart()) // server.start({})
