const Sequalize = require('sequelize');
const sequalize = require('../util/database');

const review = sequalize.define('review',{
    reviewId:{
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey : true
    },

    comment:{
        type: Sequalize.STRING
    }
});

module.exports = review;
