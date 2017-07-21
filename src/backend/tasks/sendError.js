import store                from '../redux/store'
import { types }            from '../redux/error'


export default (payload, options) => {
  const { error } = payload
  // const { isProxy } = options
  store.dispatch({ type: types.ERROR_SAGA, error })
}