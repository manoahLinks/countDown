let express = require('express'),
    router = express.Router(),
    controller = require('../controllers')


router.route('/')
    .get(controller.getAllReview)
    .post(controller.createReview)
    .delete(controller.deleteAll)

router.route('/:id')
    .get(controller.findOne)
    .put(controller.updateOne)
    .delete(controller.deleteOne)    
    

module.exports = router    