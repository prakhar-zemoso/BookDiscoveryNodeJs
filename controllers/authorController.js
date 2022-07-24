const Author = require("../Models/author")

exports.getAllAuthor=(req,res,next)=>{
   Author.fetchAll(author=>{
        res.send(author);
    });
    
};


exports.addAuthorData = (req,res)=>{

    const authorDetailEntered = new Author(req.body.name);
    authorDetailEntered.save();

    res.send(`Author Details has been entered Successfully`);
}