import store                from '../redux/store'
import db                   from '../redux/db'

store.dispatch({ type: db.types.SEED_SAGA })
