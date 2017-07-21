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
    let options = {
        dialect: 'postgres',
        host: config.port,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        define: {
            timestamps: false
        },
        //logging: console.log
        logging: false,
    }

    return new Sequelize(
      config.db.dbName,
      config.db.username,
      config.db.password,
      options
    )
}

export default {
  init
}