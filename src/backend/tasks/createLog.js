import store                from '../redux/store'
import { types }            from '../redux/log'


export default (payload, options) => {
  // const { error } = payload
  // const { isProxy } = options
  store.dispatch({ type: types.LOG_SAGA, payload })
}




