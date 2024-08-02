const express = require('express');
const router = express.Router();

// import Drone.model
const Drone = require('../models/Drone.model');

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(allDrones => {
      res.render('drones/list', { drones: allDrones });
    })

    .catch(err => {
      console.log('Error retrieving drones:', err);
      next(err);
    });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(err => res.render('drones/create-form'));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
const { id } = req.params;
Drone.findById(id)
.then(droneToEdit => res.render('drones/update-form', { drone: droneToEdit}))
.catch(err => console,log('Error whoile getting the drone from DB:',err));

});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
