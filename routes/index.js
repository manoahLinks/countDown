let express = require('express'),
    router = express.Router(),
    controller = require('../controllers')


router.route('/')
    .get(controller.getAllReview)
    .post(controller.createReview)

router.route('/:id')
    .get(controller.findOne)
    .delete(controller.deleteOne)    
    

module.exports = router    