var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var promoSchema = new Schema({
    code: String,
    discount_type: {type: String, default: 'fixed'}, //either fixed or percent
    discount: Number,
    expiration_date: Date,
    single_use: {type: Boolean, default: true},
    is_used: {type: Boolean, default: false}
});

module.exports = mongoose.model('Promo', promoSchema);