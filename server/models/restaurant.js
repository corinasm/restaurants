// This is the file that specifies the schema to be loaded by mongoose.
// This file is required by mongoose.js.
// We do not need to require this file in the controller, instead, the model itself is loaded from mongoose.
// There can be many models in the server/models folder.

var mongoose = require('mongoose');

// create the schema
var RestaurantSchema = new mongoose.Schema({
    rest_name: {
        type: String, 
        minlength: 3,
        required:[true, "Restaurant name is required"],
        message: "Restaurant name must contain at least 3 characters",
    },  
    cuisine: {
        type: String, 
        minlength: 3,
        required:[true, "Cuisine is required"],
        message: "Restaurant name must contain at least 3 characters",
    },

    reviews: { type: [{
            user_name: {type: String, required:[true, "Name is required"], minlength: [3, "Name must contain 3 characters"]},
            stars: {type: Number, required: [true, 'Star rating is required']},
            user_review: {type: String, required:[true, "Review is required"], minlength: [3, "Review must contain 3 characters"]}, 
    }]},
    }, {timestamps: true }) 

   mongoose.model('Restaurant', RestaurantSchema); 
   
// register the schema as a model
var Restaurant = mongoose.model('Restaurant', RestaurantSchema);



