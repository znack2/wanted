import store                from '../redux/store'
import { types }            from '../redux/email'



export default (payload, options) => {
  // const { error } = payload
  // const { isProxy } = options
  store.dispatch({ type: types.EMAIL_SAGA, payload })
}




