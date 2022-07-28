const Sequalize = require('sequelize');
const sequelize = require('../util/database');

const category = sequelize.define('category',{
    id:{
        type:Sequalize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey: true
    },

    category_type:{
        type: Sequalize.STRING,
        allowNull: false

    }
})

module.exports = category;