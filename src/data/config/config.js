const env = process.env
const nodeEnv = env.NODE_ENV || 'development';

const isDev           = process.env.NODE_ENV === 'development'
const isTest          = process.env.NODE_ENV === 'test'

require('dotenv').config();

const logger = function(message){
  console.info('*****');
  console.info(message);
  console.info('*****');
};

const WHITELIST = {
  posts: {
    create: ['title', 'text'],
    update: ['title', 'text'],
  },
  users: {
    create: ['email', 'username', 'password'],
  },
};

const defaultConfig = {
// NAME: Wanted,
// port: env.PORT || 8080,
//GRAPHQL_PORT = 8080;
//   JWT_SECRET: env.JWT_SECRET_DEV,
  // MONGO_URL: env.MONGO_URL_DEV,
  PORT: env.PORT || 3000,
  RAVEN_ID: env.RAVEN_ID,
  WHITELIST,
};

const devConfig = {};
const testConfig = {};
const prodConfig = {};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(env.NODE_ENV),
};
