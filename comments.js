// Create web server
// const http = require('http');
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/plain');
//     res.end('Hello World');
// });

// server.listen(port, () => {
//     console.log(`Server running at port ${port}`);
// });

// Path: comments.js
// Create web server using express
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//     res.json({ message: 'Express is up!' });
// });

// app.listen(port, () => {
//     console.log(`Server running at port ${port}`);
// });

// Path: comments.js
// Create web server using express and mongodb
// const express = require('express');
// const bodyParser = require('body-parser');
// const dbConfig = require('./config/database.config.js');
// const mongoose = require('mongoose');
// const app = express();
// const port = 3000;

// mongoose.Promise = global.Promise;

// mongoose.connect(dbConfig.url, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log('Successfully connected to the database');
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...');
//     process.exit();
// });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//     res.json({ message: 'Express is up!' });
// });

// app.listen(port, () => {
//     console.log(`Server running at port ${port}`);
// });

// Path: comments.js
// Create web server using express, mongodb and controller
// const express = require('express');
// const bodyParser = require('body-parser');
// const dbConfig = require('./config/database.config.js');
// const mongoose = require('mongoose');
// const app = express();
// const port = 3000;

// mongoose.Promise = global.Promise;

// mongoose.connect(dbConfig.url, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log('Successfully connected to the database');
// }).catch(err => {
//