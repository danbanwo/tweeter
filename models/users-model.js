const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');


const User = sequelizeConnection.define('user', {
    name: {type: Sequelize.STRING,
        validate: {len:[1,100],notEmpty:true}
    },
    username:{type: Sequelize.STRING,
        validate: {len:[1,100],notEmpty:true}
    },
    email: {type: Sequelize.STRING,
        validate: {len:[1,100],notEmpty:true, isEmail: true}
    },
    img: {type: Sequelize.STRING,
        validate: {len:[1,100],notEmpty:true}
    }
});


module.exports = User;