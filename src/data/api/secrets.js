export default (payload = {}) => {
  const { fromJSONFile } = payload
  if (fromJSONFile) {
    return require(fromJSONFile)
  }

  return {
    "auth": {
      "google": {
        "clientID": "???",
        "clientSecret": "???"
      },
      'lastfm': {
        'api_key': process.env.LASTFM_KEY || 'c8c0ea1c4a6b199b3429722512fbd17f',
        'secret': process.env.LASTFM_SECRET || 'is cb7857b8fba83f819ea46ca13681fe71'
      },
      'facebook': {
        clientID: process.env.FACEBOOK_ID || '754220301289665',
        clientSecret: process.env.FACEBOOK_SECRET || '41860e58c256a3d7ad8267d3c1939a4a',
        callbackURL: '/auth/facebook/callback',
        passReqToCallback: true,
        enableProof: true,
        authOptions: { scope: ['email', 'user_location'] }
      },
      'github': {
        clientID: process.env.GITHUB_ID || 'cb448b1d4f0c743a1e36',
        clientSecret: process.env.GITHUB_SECRET || '815aa4606f476444691c5f1c16b9c70da6714dc6',
        callbackURL: '/auth/github/callback',
        passReqToCallback: true,
        enableProof: true,
        authOptions: {}
      },
      'twitter': {
        consumerKey: process.env.TWITTER_KEY || '6NNBDyJ2TavL407A3lWxPFKBI',
        consumerSecret: process.env.TWITTER_SECRET || 'ZHaYyK3DQCqv49Z9ofsYdqiUgeoICyh6uoBgFfu7OeYC7wTQKa',
        callbackURL: '/auth/twitter/callback',
        passReqToCallback: true,
        enableProof: true,
        authOptions: {}
      },
      'google': {
        clientID: process.env.GOOGLE_ID || '828110519058.apps.googleusercontent.com',
        clientSecret: process.env.GOOGLE_SECRET || 'JdZsIaWhUFIchmC1a_IZzOHb',
        callbackURL: '/auth/google/callback',
        passReqToCallback: true,
        enableProof: true,
        authOptions: { scope: 'profile email' }
      },
      'linkedin': {
        clientID: process.env.LINKEDIN_ID || '77chexmowru601',
        clientSecret: process.env.LINKEDIN_SECRET || 'szdC8lN2s2SuMSy8',
        callbackURL: process.env.LINKEDIN_CALLBACK_URL || 'http://localhost:3000/auth/linkedin/callback',
        scope: ['r_basicprofile', 'r_emailaddress'],
        passReqToCallback: true,
        enableProof: true,
        authOptions: { state: 'SOME STATE' }
      },
      'steam': {
        apiKey: process.env.STEAM_KEY || 'D1240DEF4D41D416FD291D0075B6ED3F'
      },
      'twilio': {
        sid: process.env.TWILIO_SID || 'AC6f0edc4c47becc6d0a952536fc9a6025',
        token: process.env.TWILIO_TOKEN || 'a67170ff7afa2df3f4c7d97cd240d0f3'
      },
      'clockwork': {
        apiKey: process.env.CLOCKWORK_KEY || '9ffb267f88df55762f74ba2f517a66dc8bedac5a'
      },
      'stripe': {
        secretKey: process.env.STRIPE_SKEY || 'sk_test_BQokikJOvBiI2HlWgH4olfQ2',
        publishableKey: process.env.STRIPE_PKEY || 'pk_test_6pRNASCoBOKtIshFeQd4XMUh'
      },
      'paypal': {
        host: 'api.sandbox.paypal.com',
        client_id: process.env.PAYPAL_ID || 'AdGE8hDyixVoHmbhASqAThfbBcrbcgiJPBwlAM7u7Kfq3YU-iPGc6BXaTppt',
        client_secret: process.env.PAYPAL_SECRET || 'EPN0WxB5PaRaumTB1ZpCuuTqLqIlF6_EWUcAbZV99Eu86YeNBVm9KVsw_Ez5',
        returnUrl: process.env.PAYPAL_RETURN_URL || 'http://localhost:3000/api/paypal/success',
        cancelUrl: process.env.PAYPAL_CANCEL_URL || 'http://localhost:3000/api/paypal/cancel'
      },
      'lob': {
        apiKey: process.env.LOB_KEY || 'test_814e892b199d65ef6dbb3e4ad24689559ca'
      },
      'bitgo': {
        accessToken: process.env.BITGO_ACCESS_TOKEN || '4fca3ed3c2839be45b03bbd330e5ab1f9b3989ddd949bf6b8765518bc6a0e709'
      }
    },



    sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here',
    //will be generated. Take a look at the bottom of this file
    postgres: {},
    sessionTable: 'session',
    googleAnalyticsCode: process.env.GOOGLE_ANALYTICS_CODE || null,
    nyt: {
      key: process.env.NYT_KEY || '9548be6f3a64163d23e1539f067fcabd:5:68537648'
    },
  }
}



//constructing Postgres connection string
if(process.env.NODE_ENV === 'test-travis') {
  module.exports.postgres = 'postgres://postgres@127.0.0.1/test_travis_ci';
} else if(process.env.NODE_ENV === 'test') {
  module.exports.postgres = 'postgres://yhnavein:123@127.0.0.1/test';
} else {
  module.exports.postgres = process.env.DATABASE_URL || 'postgres://yhnavein:123@127.0.0.1/prod';
}
