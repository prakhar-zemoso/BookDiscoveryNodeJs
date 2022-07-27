
const Book = require('../Models/book');



exports.createBook = (req,res)=>{
    if(!(req.body.bookTile && req.body.bookDescription && req.body.bookLanguage)){
            res.status(400).send({
                message:"Please provide all the data"
            })
        }

    const book = {
       
        bookTile:req.body.bookTile,
        bookDescription:req.body.bookDescription,
        bookLanguage:req.body.bookLanguage,
        isReading:req.body.isReading,
        isRecommended:req.body.isRecommended,
        isBookmarked:req.body.isBookmarked,
        categoryId:req.body.categoryId,
        authorId:req.body.authorId
         
    }

    Book.create(book).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the book."
        });
      });
}

exports.findBookByAuthor= (req,res)=>{
  const bookId = req.params.id;
  Book.findByPk(bookId,{include:["author"]})
  .then((data)=>{
    res.send(data);
  })
  .catch((err) => {
    console.log(">> Error while finding book: ", err);
  });

}

exports.findAllReviewsOnBook=(req,res)=>{
  const bookId = req.params.id;
  Book.findByPk(bookId,{include:['review']})
  .then((data)=>{
    res.send(data);
  })
  .catch((err)=>{
    console.log(">> Error while finding book: ", err)
  })


}


exports.findBookId =(req,res)=>{
  const id = req.params.id;
  Book.findByPk(id)
  .then(data => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find book with id=${id}.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error retrieving book with id=" + id
    });
  });
}

exports.findAllBooks = (req, res) => {
  const authorName = req.query.authorName;
var condition = authorName? { authorName: { [Op.like]: `%${authorName}%` } } : null;
  try {
      Book.findAll({where:condition})
      .then(data=>{ 
          res.send(data);});
  } catch (err) {
      console.log(err);
  }
};


exports.updateBook = (req,res)=>{
  const id = req.params.id;
  Book.update(req.body,{
      where:{BookId:id}

  }).then(num => {
      if(num==1){
          res.send({
              message: "Book was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update Book with id=${id}. Maybe book was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Book with id=" + id
       });
  })
}

exports.findBookCategory=(req,res)=>{
  const bookId = req.params.id;
  Book.findByPk(bookId,{include:['category']})
  .then(data=>{
    res.send(data);
})
.catch(err => {
  res.status(500).send({
    message: "Error updating Book with id=" + id
  });
});

}
const { Op } = require("sequelize");

exports.findBooksTitle = (req, res) => {
  const booktile = req.query.booktile;
  res.send(booktitle);
var condition = booktile? { booktile: { [Op.like]: `%${booktile}%` } } : null;
  try {
      Book.findAll({where:condition})
      
     .then(data=>{ 
          res.send(data);});
  } catch (err) {
      console.log(err);
  }
};



exports.isReading = (req, res) => {
  Book.findAll({ where: { isReading: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};