import store                from '../redux/store'
import { types }            from '../redux/file'



export default (payload, options) => {
  // const { error } = payload
  // const { isProxy } = options
  store.dispatch({ type: types.FILE_SAGA, payload })
}


