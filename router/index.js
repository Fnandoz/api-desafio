const corsRouter = require('./cors')
const productsRouter = require('./products')

module.exports = (app) => {
  app.use(corsRouter)
  app.use(productsRouter)
}
