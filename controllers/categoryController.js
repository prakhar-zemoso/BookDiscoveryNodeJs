const { request } = require("express");

const Category = require('../Models/category');


exports.createAuthor = (req,res)=>{

    if(!req.body.category_type){
        res.status(400).send({

            message: "Content can not be empty!"
    });
        return;
    }

    const category ={
        category_type : req.body.category_type,

    };

    Category.create(category).then(data=>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message && "Some error occurred while creating the Author."
        });
      });
    
};



exports.findAll = (req,res)=>{
    Category.findAll()
    .then(data=>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
            err.message||"Some error occured while retrieving Category"
        });
    });

}

exports.findById = (req,res)=>{
    const id  = req.params.id;
    Category.findByPk(id).then(data=>{
        if(data){
        res.send(data);
    }else{
        res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
        })

    }
}).catch(err => {
    res.status(500).send({
      message: "Error retrieving Tutorial with id=" + id
    });
  });


}


exports.update = (req,res)=>{
    
}
