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