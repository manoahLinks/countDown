const Review = require('../model/model');
let dbcon = require('../services/db')


exports.getAllReview = (req, res)=>{
    let sql = "SELECT * FROM reviews";

    dbcon.query(sql, (err, data)=>{
        if(err){
            throw res.json({error: err})
        }
        res.json(data)
    })
}


exports.createReview = (req, res)=>{

    if(!req.body){
        res.json({message: 'required fields are empty'})
    }

    const review = new Review(req.body.email, req.body.message)
    
    Review.create(review, (err, data)=>{
        if (err) {
            res.json({message: 'an error occured while creating a review'})
        }
        res.json(data)
    })
} 

exports.findOne = (req, res)=>{
    Review.findById(req.params.id, (err, data)=>{
        if(err){
            res.status(404).json({message: 'this review does not exist', err: err})
        }
        res.status(200).json(data)
    })
}

exports.updateOne = (req, res)=>{
    if(!req.body){
        res.status(404).json({message: 'fields cannot be empty'})
    }

    Review.updateById(req.params.id, new Review(req.body.email, req.body.message), (err, data)=>{
        if(err){
            res.status(500).json({message: 'error updating review', err: err})
        }

        res.status(200).json(data)
    })
}

exports.deleteOne = (req, res)=>{
    Review.deleteReview(req.params.id, (err, data)=>{
        if(err){
            res.status(404).json({message: 'unable to delete this review', err: err})
        }
        res.status(200).json({message: 'successfully deleted', data: data})
    })
}


exports.deleteAll = (req, res)=>{
    Review.deleteAllReviews((err, data)=>{
        if(err){
            res.status(404).json({message: 'an error occured while deleting all reviews'})
        }
        res.status(200).json({message: `successfully deleted ${data.affectedRows}`})
    })
}

module.exports = exports