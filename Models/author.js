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












// const fs = require('fs');
// const path = require('path');

// //const author = [];

// module.exports = class Book{
//     constructor(name){
//         this.name = name;
//     }
//     save(){
//         const author = path.join(path.dirname(process.mainModule.filename),'dataFile','author.json');

//         fs.readFile(author,(err,fileContent)=>{
//             let authors = [];
//             if(!err){
//                 authors = JSON.parse(fileContent);
//             }
//             authors.push(this);

//             fs.writeFile(author,JSON.stringify(authors),(err)=>{
//                 console.log(err);
//             })
//         })

//     }

//     static fetchAll(cb){

//         const author = path.join(path.dirname(process.mainModule.filename),'dataFile','author.json');

//         fs.readFile(author,(err,fileContent)=>{
//             if(err){
//                 cb([]);
//             }
//             cb(JSON.parse(fileContent));
//         })
//         return author;
//     }
// }