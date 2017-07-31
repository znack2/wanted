import store                from '../redux/store'
import { types }            from '../redux/auth'



export default (payload, options) => {
  // const { error } = payload
  // const { isProxy } = options
  store.dispatch({ type: types.AUTH_SAGA, payload })
}




