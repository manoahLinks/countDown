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
        if(res.length){
            result(null, res)
        }
        // result({message: 'unable to locate resource'})
    })
}


module.exports = Review