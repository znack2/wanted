import store                from '../redux/store'
import { types }            from '../redux/config'

export default (payload, options) => {
  // const { error } = payload
  // const { isProxy } = options
  store.dispatch({ type: types.CONFIG_SAGA, payload })
}






