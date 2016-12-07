const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');


//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.urlencoded({ extended: true }));

//listen on port 8888
app.listen('5000', () => console.log('Listening on port 5000'));
app.use(express.static(path.join(__dirname, '/front/App.css')));
app.use(express.static(path.join(__dirname, '/front/bundle')));

//////////
// YOUR CODE HERE:
//////////
app.use('/api/tweets', require('./routes/index').tweetsRouter);
app.use('/api/users', require('./routes/index').usersRouter)

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/front/index.html'));
});
