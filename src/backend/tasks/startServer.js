import store                from '../redux/store'
import { types }            from '../redux/app'

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
// store.dispatch({ type: types.LOAD, { PORT: 3000 } })
// store.dispatch(appStart()) // server.start({})

export default (payload, options) => {
  // const { error } = payload
  // const { isProxy } = options
  store.dispatch({ type: types.START_SAGA, payload })
}
