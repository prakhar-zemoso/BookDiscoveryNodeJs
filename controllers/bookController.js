
const Book = require('../Models/book');

exports.getAllBook=(req,res,next)=>{
    Book.fetchAll(book =>{
        res.send(book);

    });
    
};


exports.addBookData = (req,res)=>{
 
    const bookDetailEntered = new Book(req.body.title,req.body.description)
    bookDetailEntered.save();
   

    console.log(bookDetailEntered[0]);

    res.send(`Book Details has been entered Successfully`);
}