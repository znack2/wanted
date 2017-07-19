import store                from '../redux/store'
import { types }            from '../redux/db'

store.dispatch({ type: types.SEED_SAGA })

