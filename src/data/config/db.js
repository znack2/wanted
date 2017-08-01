export default (payload = {}) => {
  const { fromJSONFile } = payload
  if (fromJSONFile) {
    return require(fromJSONFile)
  }

  return {
    "development": {
      "username": "minkovski",
      "password": null,
      "database": "wanted",
      "host": "127.0.0.1",
      "port": 5432,
      "dialect": "postgres"
      // pool: {
      //   max: 5,
      //   min: 0,
      //   idle: 10000
      // },
      // define: {
      //   timestamps: false
      // },
      // //logging: console.log
      // logging: false,
    },
    "test": {
      "username": "minkovski",
        "password": null,
        "database": "wanted-test",
        "host": "127.0.0.1",
        "port": 5432,
        "dialect": "postgres"
    },
    "production": {
      "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "postgres"
    }
  }
}


// import config    from __dirname + '../../../data/db.json')[env]
// const basename  = path.basename(module.filename)
// const env       = process.env.NODE_ENV || 'development'