const author = require('../Models/author');
const Book = require('../Models/book');
const category =require('../Models/category.js');

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

exports.bookDetails=(req,res)=>{

  let authorName,category_type;
  if(("authorName" in req.query && "category_type" in req.query)){
    category_type = req.query.category_type;
    authorName = req.query.authorName;

  Book.findAll({include:[{
                      model :author ,as: "author",
                      where:{authorName:authorName},
                      required:"false"
                    },
                  {
                    model :category ,as: "category",
                      where:{category_type:category_type},
                      required:"false"
                   }
                  ]
})
  .then(data => res.send(data))
  .catch(err => console.error(err));
}
else if(("authorName" in req.query )){
  authorName = req.query.authorName;

Book.findAll({include:[{
                    model :author ,as: "author",
                    where:{authorName:authorName},
                    required:"false"
                  }
                ]
})
.then(data => res.send(data))
.catch(err => console.error(err));
}
else if( "category_type" in req.query){
  category_type = req.query.category_type;

Book.findAll({include:[
                {
                  model :category ,as: "category",
                    where:{category_type:category_type},
                    required:"false"
                 }
                ]
})
.then(data => res.send(data))
.catch(err => console.error(err));
}
else if(("isReading" in req.query)){
  isReading = req.query.isReading;

Book.findAll({where:{isReading:isReading}})
.then(data => res.send(data))
.catch(err => console.error(err));
}
else if(("isRecommended" in req.query)){
  isRecommended = req.query.isRecommended;

Book.findAll({where:{isRecommended:isRecommended}})
.then(data => res.send(data))
.catch(err => console.error(err));
}
else if(("bookTile" in req.query)){
  bookTile = req.query.bookTile;

Book.findAll({where:{bookTile:bookTile}})
.then(data => res.send(data))
.catch(err => console.error(err));
}
else {
  const authorId = req.query.authorId;
var condition = authorId? { authorId: { [Op.like]: `%${authorId}%` } } : null;
  try {
      Book.findAll({where:condition})
      .then(data=>{ 
          res.send(data);});
  } catch (err) {
      console.log(err);
  }

}

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



  
