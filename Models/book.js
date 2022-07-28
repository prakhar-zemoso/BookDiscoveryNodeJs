<<<<<<< HEAD
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
=======
const { json } = require('body-parser');
const fs = require('fs');
const path = require('path');


module.exports = class Book{

    constructor(title, description){
        this.title = title;
        this.description = description;

    }

    save(){
        

        const book = path.join(path.dirname(process.mainModule.filename),'dataFile','book.json');

        
        fs.readFile(book,(err,fileContent)=>{
            let books = [];
            if(!err){
                books = JSON.parse(fileContent);
            }
            books.push(this);

            fs.writeFile(book,JSON.stringify(books),(err)=>{
                console.log(err);
            })
        });
    }

    static fetchAll(cb){
        const book = path.join(path.dirname(process.mainModule.filename),'dataFile','book.json');
        fs.readFile(book,(err,fileContent)=>{
            if(err){
                cb([]);
            }
            cb( JSON.parse(fileContent));
        })
        
    }

}
>>>>>>> ae764f9e72719c709c79e62c9a322f28a0b5e9df
