var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var promoSchema = new Schema({
    code: String,
    discount_type: {type: String, default: 'fixed'}, //either fixed or percent
    discount: Number,
    expiration_date: Date,
    single_use: {type: Boolean, default: false},
    is_used: {type: Boolean, default: false}
});

//default date format: 2019-06-01 00:00:00.000 YYYY-MM-DD HH:MM:SS:mmm

module.exports = mongoose.model('Promo', promoSchema);