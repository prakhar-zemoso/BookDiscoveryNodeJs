const Sequalize = require('sequelize');
const sequalize = require('../util/database');

const book = sequalize.define("book",{
    bookid:{
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey : true
    },
    bookTile:{
        type: Sequalize.STRING
    },
    bookDescription:{
        type: Sequalize.STRING
    },
    bookLanguage:{
        type:Sequalize.STRING
    },
    isReading:{
        type: Sequalize.STRING
    },
    isRecommended:{
        type: Sequalize.STRING
    },
    isBookmarked:{
        type: Sequalize.STRING
    }

})

module.exports = book;
