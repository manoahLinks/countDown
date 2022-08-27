const sql = require('../services/db')

function Review (email, message){

    this.email = email
    this.message = message

}

Review.create = (newReview, result) =>{

    sql.query("INSERT INTO reviews SET ?", newReview, (err, data)=>{
        if(err){
            result(null, err)
            return;
        }
        result(null, data)
    })
}

Review.findById = (id, result)=>{
    sql.query(`SELECT * FROM reviews WHERE id = ${id}`, (err, res)=>{
        if(err){
            result(null, err)
            return;
        }
         else if(res.length){
            result(null, res)
        }else{
            result({message: 'unable to locate resource'})
        }
    })
}


Review.updateById = (id, review,result)=>{
    sql.query(`UPDATE reviews SET email = ?, message = ? WHERE id = ${id}`, 
    [review.email, review.message], (err, res)=>{
        if(err){
            result(null, err)
        }
        else{
            result(null, res)
        }
    })
}

Review.deleteReview = (id, result)=>{
    sql.query(`DELETE FROM reviews WHERE id = ${id}`, (err, res)=>{
        if(err){
            result(null, err)
            return;
        }
        result(null, res)
    })
}



module.exports = Review