var mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');

var PetSchema = new mongoose.Schema({
    name: {
        type: String, 
        minlength: 3,
        required: "Please input a name of at least 3 characters",
        unique: true,
    },
    type: {
        type: String, 
        minlength: 3,
        required: "Please input a type of at least 3 characters"
    },
    desc: {
        type: String, 
        minlength: 3,
        required: "Please input a description of at least 3 characters"
    },
    likes:{
        type: Number,
        default: 0,
    },
    one:{
        type: String,
        
        required: false
    },
    two:{
        type: String,
        
        required: false
    },
    three:{
        type: String,
        
        required: false
    },

},{ timestamps: true });
PetSchema.plugin(uniqueValidator);

mongoose.models = {}
var Pet = mongoose.model('Pet', PetSchema)
module.exports = Pet