import store                from '../redux/store'
import { types }            from '../redux/check'


export default (payload, options) => {
  // const { error } = payload
  // const { isProxy } = options
  store.dispatch({ type: types.VALIDATE_SAGA, payload })
}


