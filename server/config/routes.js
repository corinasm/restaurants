// This is the file that specifies which routes will be handled and by which controller methods.
// From routes.js we require the controller file (or files).

var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');
var restaurants = require('../controllers/restaurants.js');
var path = require('path');

module.exports = function(app) {
    
    //List all restaurants
    app.get('/restaurants', function(req, res) { 
        restaurants.getAllRest(req,res)      
    })

    //Get one restaurant by ID
    app.get('/restaurant/:id', function(req, res) { 
        restaurants.getOneRestById(req,res)      
    })

    //Edit a restaurant
    app.patch('/edit-restaurant/:id',function(req, res){
        console.log("I am in routes file. Calling controller editRest method!")
        restaurants.editRest(req,res)
    })

    //Delete a restaurant
    app.delete('/delete-restaurant/:id',function(req, res){
        restaurants.deleteRest(req,res)
    })
    // //List all reviews for a restaurant
    // app.get('/restaurant-reviews/:id', function(req, res) {
    //     restaurants.getAllRevByRestId(req,res) 
    // })    

    //Register a new restaurant
    app.post('/new-restaurant', function(req, res) {
        restaurants.addRest(req, res)
    })

    //Write a new review
    app.post('/write-review/:id', function(req, res) {
        console.log("got to the route");
        restaurants.addRevbyRestId(req, res)
    })

    // app.all("*", (req,res,next) => {
    //     res.sendFile(path.resolve("./../client/dist/index.html"))
    // });

}
