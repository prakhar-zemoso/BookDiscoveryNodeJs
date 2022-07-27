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
            message: `Cannot find Category with id=${id}.`
        })

    }
}).catch(err => {
    res.status(500).send({
      message: "Error retrieving Category with id=" + id
    });
  });

}


exports.update=(req,res)=>{

    const id = req.params.id;
    Category.update(req.body,{
        where:{id:id}
    }).then(num =>{
        console.log(num);
        if(num==1){
            res.send({
                message:"Category was updated Successfully"
            });
        }
            else{
                res.send({
                    message:`Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`
                })
            }
        
    }).catch(err => {
        res.status(500).send({
            message: "Error updating Category with id=" + id
        });
    })
}


exports.findBooksInCategory = (req,res)=>{
    const categoryId = req.params.id;

    Category.findByPk(categoryId,{include:["book"]})
    .then(data=>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Category with id=" + categoryId
        });
    });

}