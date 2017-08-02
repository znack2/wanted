import store                from '../redux/store'
import { types }            from '../redux/response'



export default (payload, options) => {
  // const { error } = payload
  // const { isProxy } = options
  store.dispatch({ type: types.RESPONSE_SAGA, payload })
}




