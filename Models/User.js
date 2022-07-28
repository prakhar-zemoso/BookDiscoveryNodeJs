const Sequalize = require('sequelize');
const sequalize = require('../util/database');

const user = sequalize.define('user',{
    userId:{
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey : true
    },

    name:{
        type: Sequalize.STRING
    }
})

module.exports = user;
