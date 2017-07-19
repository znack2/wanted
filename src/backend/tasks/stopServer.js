import store                from '../redux/store'
import { types }            from '../redux/app'

store.dispatch({ type: types.SEED_SAGA })

