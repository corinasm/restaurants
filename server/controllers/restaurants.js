// This is the file that handles all of the server-side logic. The controller is called upon by the routes.
// The controller interacts with preloaded models to run database commands.
// The controller sends the response to the client.
// There can be many controllers in the server/controllers folder.

var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');
module.exports = {

    getAllRest: function(req, res) {
        Restaurant.find({}, function(err, data) {
            if (err) {
                console.log("getAll error:", err); 
                res.json({message: "Error!", err: err}); 
            } else {
                res.json({message: "Success", data: data}) 
            }
         
        }) 
    },

    getOneRestById: function(req, res) {
        Restaurant.findOne({_id: req.params.id}, function(err, data){
            if (err) {
                console.log("getOneRestByID error:", err); 
                res.json({message: "Error!", err: err}); 
            } else {
                console.log("getOneRestById:", data); //
                res.json({message: "Success", data: data}) 
            }
        })    
    },

    deleteRest: function(req, res) {
        Restaurant.deleteOne({_id: req.params.id}, function(err, data){
            if (err) {
                console.log("deleteRest error:", err); 
                res.json({message: "Error!", err: err}); 
            } else {
                res.json({message: "Delete success", data: data}) 
            }
        })    
    },

    editRest: function(req, res){
        Restaurant.update({_id:req.body._id}, req.body,{runValidators:true}, function(err, data) {
            console.log("I am in controller editRest method. My post body and _id is: ", req.body, req.body._id);
            if (err) {
                console.log("editRest error:", err); 
                res.json({message: "Error!", err: err}); 
            } else {
                res.json({message: "Success", data: data}) 
            }
        })
    },

    getAllRevByRestId: function(req, res) {
        Restaurant.findOne({_id: req.params.id}, function(err, data){
            if (err) {
                console.log("getRevByRestId error:", err); 
                res.json({message: "Error!", err: err}); 
            } else {
                console.log("getRevByRestId:", data); //*need to see object
                res.json({message: "Success", data: data}) 
            }
        })    
    },

    addRest: function(req, res) {
        console.log("New restaurant:", req.body)
        Restaurant.create(req.body, function(err, data) {
            if (err) {
                console.log("addRest error:", err); 
                res.json({message: "Error", err: err}); 
            } else {
                res.json({message: "Success", data: data});
            } 
        })
    },


    addRevbyRestId: function(req, res) {
        console.log("New review:", req.body)
        Restaurant.update({_id:req.body._id}, req.body, function(err, data) { ///?
        // Restaurant.update({_id:req.body._id}, {$push: {reviews: req.body.reviews}}, function(err, data) { //???
            if (err) {
                console.log("addRevbyRestId error:", err); 
                res.json({message: "Error", err: err}); 
            } else {
                res.json({message: "Success", data: data});
            } 
        })
},
}

