var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var starSchema = new Schema({
    identification_number: Number,
    name: String,
    location_coordinates: String,
    location_hemisphere: String,
    type: String,
    unique: Boolean,
    star_registration_number: Number

})

module.exports = mongoose.model('Star', starSchema);