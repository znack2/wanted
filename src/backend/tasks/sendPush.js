import store                from '../redux/store'
import { types }            from '../redux/push'



export default (payload, options) => {
  // const { error } = payload
  // const { isProxy } = options
  store.dispatch({ type: types.PUSH_SAGA, payload })
}




