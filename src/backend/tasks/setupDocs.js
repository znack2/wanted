import store                from '../redux/store'
import { types }            from '../redux/doc'



export default (payload, options) => {
  // const { error } = payload
  // const { isProxy } = options
  store.dispatch({ type: types.DOC_SAGA, payload })
}




