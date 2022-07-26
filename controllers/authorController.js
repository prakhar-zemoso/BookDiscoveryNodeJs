const Author = require("../Models/author");
const book = require("../Models/book");
const Category = require('../Models/category');

exports.createAuthor = (req,res)=>{

    if(!req.body.authorName){
        res.status(400).send({

            message: "Content can not be empty!"
    });
        return;
    }

    const author ={
        authorName : req.body.authorName,

    };

    Author.create(author).then(data=>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message && "Some error occurred while creating the Author."
        });
      });
    
};


exports.findAllAuthors = (req, res) => {
    const authorName = req.query.authorName;
  var condition = authorName? { authorName: { [Op.like]: `%${authorName}%` } } : null;
    try {
        Author.findAll({where:condition})
        .then(data=>{ 
            res.send(data);});
    } catch (err) {
        console.log(err);
    }
  };


//Find a single Tutorial with an id

exports.findOne = (req, res) => {
    const id = req.params.id;
    Author.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };

exports.update = (req,res)=>{
    const id = req.params.id;
    Author.update(req.body,{
        where:{authorId:id}

    }).then(num => {
        if(num==1){
            res.send({
                message: "Author was updated successfully."
              });
            } else {
              res.send({
                message: `Cannot update Author with id=${id}. Maybe Tutorial was not found or req.body is empty!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating Author with id=" + id
         });
    })
}


exports.delete = (req,res)=>{
    const id  = req.params.id;
    Author.destroy({
        where:{ authorId : id}
    }).then(num => {
        console.log(num);
        if(num==1){
            res.send({
                message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
    });

       });
       
}

exports.bookAuthor = (req,res)=>{
  const authorId = req.params.id;
    Author.findByPk(authorId, { include: ["book"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(">> Error while finding Author: ", err);
    });
  
}

exports.myBookAuthor = (req,res)=>{
  const authorName = req.query.authorName;
    Author.findAll({where:{authorName:authorName},  include: ["book"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(">> Error while finding Author: ", err);
    });
  
}



