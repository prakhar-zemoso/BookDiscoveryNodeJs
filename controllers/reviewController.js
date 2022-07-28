const Review = require('../Models/review');

exports.createReview = (req,res)=>{
    if(!(req.body.comment && req.body.bookId)){
        res.status(400).send({
            message:"Review cannot be empty"
        });
        return;
    }

    const review = {
        comment: req.body.comment,
        bookId:req.body.bookId
    }

    Review.create(review).then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message &&"Some error occurred while creating the Review."
        });
    });
};


exports.findAllReviews = (req,res)=>{
    Review.findAll()
    .then(data=>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
            err.message||"Some error occured while retrieving Review"
        });
    });

}

exports.findReviewById = (req,res)=>{
    const id  = req.params.id;
    Review.findByPk(id).then(data=>{
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


exports.reviewByBook=(req,res)=>{
    const reviewId = req.params.id;
    Review.findByPk(reviewId,{include:["book"]})
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        console.log("Error in fingind the data");
    })
}

