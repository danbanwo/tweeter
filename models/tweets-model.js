const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');


const Tweet = sequelizeConnection.define('tweet', {
    body: {type: Sequelize.STRING,
        validate: {len:[1,100],notEmpty:true}
    },
    likes:{type: Sequelize.INTEGER,
        validate: {len:[1,100],notEmpty:true}
    }
});


module.exports = Tweet;