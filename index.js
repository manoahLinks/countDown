let express = require('express'),
    app     = express(),
    bodyParser = require('body-parser'),
    Userroute       = require('./routes')
    // db         = require('./services')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))    
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index')
})

app.use('/api/review', Userroute)

app.listen(9500, ()=>{
    console.log('CountDown App serving')
})    