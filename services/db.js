let mysql = require('mysql')

let dbcon = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'emperor12',
    database: 'countdowndata'
})


dbcon.connect()


module.exports = dbcon
