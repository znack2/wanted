import store                from '../redux/store'
import { types }            from '../redux/app'


export default (payload, options) => {
  // const { error } = payload
  // const { isProxy } = options
  store.dispatch({ type: types.STOP_SAGA, payload })
}


