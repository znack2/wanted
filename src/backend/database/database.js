import Sequelize            from 'sequelize'
import models               from './models'

function init(config) {
    const sequelize = getConnection(config)
    const dbModels = models.init(sequelize)

    return {
        sequelize,
        models: dbModels
    }
}

function getConnection(config) {
    return new Sequelize(
      config.db.development.dbName,
      config.db.development.username,
      config.db.development.password,
      config.dv.development
    )
}

export default {
  init
}

