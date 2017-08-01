import store                from '../redux/store'
import { types }            from '../redux/db'



export default (payload, options) => {
  // const { error } = payload
  // const { isProxy } = options
  store.dispatch({ type: types.GRAPHQL_SAGA, payload })
}

