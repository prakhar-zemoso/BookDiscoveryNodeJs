const { json } = require('body-parser');
const fs = require('fs');
const path = require('path');

//Not Using this as we are storing data in the file
//const book = [];

module.exports = class Book{

    constructor(title, description){
        this.title = title;
        this.description = description;

    }

    save(){
        //book.push(this);
        //Adding data to the file system instead of an array

        const book = path.join(path.dirname(process.mainModule.filename),'dataFile','book.json');

        //getting the exsisting file data and then adding it 
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
        // return book;
    }

}