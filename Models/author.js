const Sequalize = require('sequelize');
const sequalize = require('../util/database');

const author = sequalize.define('author',{
    authorId:{
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey : true
    },

    authorName:{
        type: Sequalize.STRING
    }
})

module.exports = author;