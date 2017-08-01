import Sequelize            from 'sequelize'
// import fs                from 'fs'
// import path              from 'path'

function init(config, models) {
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


  // if (config.use_env_variable) {
  //   const sequelize = new Sequelize(process.env[config.use_env_variable]
  // } else {
  //   const sequelize = new Sequelize(config.database, config.username, config.password, config
  // }
}

function db(){
  // const db        = {}
  //
  // fs
  //   .readdirSync(__dirname)
  //   .filter(function(file) {
  //     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  //   })
  //   .forEach(function(file) {
  //     const model = sequelize['import'](path.join(__dirname, file))
  //     db[model.name] = model
  //   })
  //
  // Object.keys(db).forEach(function(modelName) {
  //   if (db[modelName].associate) {
  //     db[modelName].associate(db)
  //   }
  // })

  // db.sequelize = sequelize
  // db.Sequelize = Sequelize
}


export default {
  init,
  // db
}





/**
 * Connect to MongoDB.
 */
// mongoose.Promise = global.Promise
// mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI)
// mongoose.connection.on('error', (err) => {
//   console.error(err)
//   console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'))
//   process.exit()
// })