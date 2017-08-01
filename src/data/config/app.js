export default (payload = {}) => {
  const { fromJSONFile } = payload
  if (fromJSONFile) {
    return require(fromJSONFile)
  }

  return {
    "app": {
      "appName": "Wanted",
      "isDevLocal": true,
      "logErrors": true,
      "rootUrl": "http://localhost:3500",
      "useAuth": true
    },
    "web": {
      "port": 3500,
      // 'PORT': env.PORT || 3000,
      "sessionSecret": "secret_value_!?!"
    },
    "email": {
      "fromNoReply": "noreply@znack.com"
    },
    "format": {
      "date": "MM/DD/YYYY",
      "year": "YYYY",
      "currencySymbol": "$"
    },
    "path": {
      "public": "./public",
      "docs": "./build/docs",
      "favicon": "/public/favicon.ico",
    }
  }
}


// path.join(__dirname,'')
// __dirname + ''


// const WHITELIST = {
//   posts: {
//     create: ['title', 'text'],
//     update: ['title', 'text'],
//   },
//   users: {
//     create: ['email', 'username', 'password'],
//   },
//   'http://localhost:3000',
// }


// const defaultConfig = {
// //GRAPHQL_PORT = 8080
// //   JWT_SECRET: env.JWT_SECRET_DEV,
//   // MONGO_URL: env.MONGO_URL_DEV,
//   RAVEN_ID: env.RAVEN_ID,
//   WHITELIST,
// }