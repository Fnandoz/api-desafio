const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const corsRouter = require('./router/cors')
const routes = require('./router')

var app = express()

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(corsRouter)

routes(app)

const port = parseInt(process.env.PORT, 10) || 3003;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
