const fastify = require('fastify')({
    logger: true
});

fastify.register(require('./routes/healthRoute'));
fastify.register(require('./routes/productRoute'));

fastify.register(require('fastify-cors'), {
    origin: "*",
})

fastify.listen(3003, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});