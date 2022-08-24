let express = require('express'),
    app     = express(),
    bodyParser = require('body-parser')

app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(9500, ()=>{
    console.log('CountDown App serving')
})    