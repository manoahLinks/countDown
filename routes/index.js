let express = require('express'),
    router = express.Router(),
    controller = require('../controllers')


router.route('/')
    .get(controller.getAllReview)
    

module.exports = router    