const productController = require('../controllers/productController')

const routes = async(fastify) => {
    fastify.get('/list', productController.index);
};

module.exports = routes;