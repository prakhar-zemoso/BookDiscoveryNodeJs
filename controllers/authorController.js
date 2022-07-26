const Author = require("../Models/author")

// exports.getAllAuthor=(req,res,next)=>{
//    Author.fetchAll(author=>{
//         res.send(author);
//     });
    
// };


// exports.addAuthorData = (req,res)=>{

//     const authorDetailEntered = new Author(req.body.name);
//     authorDetailEntered.save();

//     res.send(`Author Details has been entered Successfully`);
// }


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

//Retrieve all Tutorials/ find by author Name from the database:

exports.findAll = (req, res) => {
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
                message: "Tutorial was updated successfully."
              });
            } else {
              res.send({
                message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating Tutorial with id=" + id
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

