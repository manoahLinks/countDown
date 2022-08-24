let dbcon = require('../services/db')


exports.getAllReview = (req, res)=>{
    let sql = "SELECT * FROM countdowndata";

    dbcon.query(sql, (err, data)=>{
        if(err){
            throw res.json({error: err})
        }

        res.json(data)
    })
}


module.exports = exports