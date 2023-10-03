const fs = require('fs');
const express = require('express');
const tourController = require('./../controllers/tourContoller');
const router = express.Router();
const tourRouter = express.Router();

///////////////////////Routing Fucntions/Rout handlers   //////////////////////

//moved to contoller
//Param midleware. These are middleware that run on specific routes
router.param('id', (req, res, next, val) => {
  console.log(`Tour id is ${val}`);
  next();
});

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
