
const Book = require('../Models/book');

//const books = [];
exports.getAllBook=(req,res,next)=>{
    Book.fetchAll(book =>{
        res.send(book);

    });
    
};


exports.addBookData = (req,res)=>{
    //const bookDetailEntered = req.body;
    const bookDetailEntered = new Book(req.body.title,req.body.description)
    bookDetailEntered.save();
    //books.push(bookDetailEntered);

    console.log(bookDetailEntered[0]);

    res.send(`Book Details has been entered Successfully`);
}