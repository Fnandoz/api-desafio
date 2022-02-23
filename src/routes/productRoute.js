const taskController = require('../controllers/productController')

const routes = async(fastify) => {
    fastify.get('/list', taskController.index);
};

module.exports = routes;