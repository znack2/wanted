import { graphqlExpress }       from 'apollo-server-express'
import { graphiqlExpress }      from 'graphql-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import { formatError }          from 'graphql'
import bodyParser               from 'body-parser'

import connectGraphQl       from '../tasks/connectGraphQl'

function initGraphQL(app) {

  const schema = connectGraphQl()
  app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
  // app.use('/graphiql', processGraphiQL)
  // app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql',}))
  // app.use('/graphql', graphqlHTTP() => ({
//   schema,
//   graphql: true
//   pretty : true
// })))
//   app.use('/', apolloServer({
//     schema : Schema,
//     mocks : Mocks
//     graphql: true
//     pretty : true
//   }))
}

export default {
  initGraphQL,
}
