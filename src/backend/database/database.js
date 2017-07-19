import Sequelize            from 'sequelize'
import models               from './models'

function init(options) {
    const sequelize = getConnection(options)
    const dbModels = models.init(sequelize)

    return {
        sequelize,
        models: dbModels
    }
}

function getConnection(options) {
    let data = {
        dialect: 'postgres',
        host: options.port,
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
      options.db.dbName,
      options.db.username,
      options.db.password,
      data
    )
}

export default {
  init
}