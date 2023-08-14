// Create web server

// import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// import routes
const comments = require('./routes/comments');

// create express app
const app = express();

// enable cors
app.use(cors());

// parse application/json
app.use(bodyParser.json());

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// use routes
app.use('/api/comments', comments);

// create port
const port = process.env.PORT || 5000;

// start server
app.listen(port, () => console.log(`Server started on port ${port}`));