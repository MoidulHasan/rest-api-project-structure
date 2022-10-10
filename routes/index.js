/**
 * Name: Main route
 * Description: this module provide top label routes for the application
 * Author: Moidul Hasan Khan
 * Date: 02/09/2022
 */

// Dependencies
const express = require('express');
const router = express.Router();

// import sub routes
const roomRoutes = require('./room')

// Import controllers
const authController = require('./../controllers/auth');


// public routes
router.post('/login', authController.login);
router.post('/signup', authController.signup);

router.use('/room', roomRoutes)


// Protect all routes after this middleware
router.use(authController.protect);



module.exports = router;