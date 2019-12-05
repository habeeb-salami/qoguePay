let express = require('express');
let app = express();
const bodyParser = require('body-parser');
const path = require('path');
// const articlesRoute = require('./router/article');
// const employeeRoute = require('./router/employee');
// const Gifs = require('./router/gif');

//CORS middleware below
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content, Accept,Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Method', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(bodyParser.json());
// app.use('/api/v1/articles', articlesRoute);
// app.use('/api/v1/auth', employeeRoute);
// app.use('/api/v1/gifs', Gifs);
// when a random route is inputed
app.get('*', (req, res) => res.status(200).json({
    status: 'success',
    message: 'Welcome to QoguePay API Endpoint.',
}));

module.exports = app;