import cors                 from 'cors'
import { createServer }     from 'http'


const PORT = 5000

const whitelist = [
  'http://localhost:3000',
]

const corsOptions = {
  origin(origin, callback) {
    const originIsWhitelisted = whitelist.indexOf(origin) !== -1
    callback(null, originIsWhitelisted)
  },
  credentials: true
}

export default (payload = {}) => new Promise((resolve) => {
  const { middlewareList = [] } = payload

  const server = createServer(app)

  // const jsFiles = fs.readdirSync('./build/static/js')

  app.use(express.static('./build'))

  app.use(cors(corsOptions))


  middlewareList.map(middleware => middleware({ app }))

  app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500)
    res.send(`Internal server error`)
  })

  server.listen(PORT, () => {
    console.log(`==> 🌎  http://0.0.0.0:${ PORT }/`)
    resolve()
  })
})


