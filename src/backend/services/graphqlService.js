const GraphiQL = require('graphql-server-module-graphiql')
const url = require('url')


export default ({ app,getSchema }) => {
  async function processGraphQL(req, res) {
    try {
      const query = req.query.query || req.body.query
      if (query && query.length > 2000) {
        throw new Error('Query too large')
      }

      return {
        schema: schema,
        context: {
          req,
          res,
        }
      }
    } catch (err) {
      res.status(500)
      const result = { errors: [err] }
      result.errors = result.errors.map(formatError)
      res
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(result))
    }
  }

  async function processGraphiQL(req, res) {
    console.log(`processGraphiQL()`, req.path)

    const endpointURL = `/graphql`

    const q = req.url && url.parse(req.url, true).query || {}
    const query = q.query || ''
    const operationName = q.operationName || ''
    const graphiQLString = GraphiQL.renderGraphiQL({
      endpointURL,
      query,
      variables: q.variables && JSON.parse(q.variables),
      operationName: operationName,
    })
    res.setHeader('Content-Type', 'text/html')
    res.write(graphiQLString)
    res.end()
  }

  app.use('/graphql', graphqlExpress(processGraphQL))

}

