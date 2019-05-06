var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    order_id:  Number,
    package: {
        tier: String,
        extras: {}
    },
    customer: {
        id: String,
        name: String,
        email: String,
    },
    price: Number,
    message: String,
    is_user_recipient: Boolean,
    recipient: {
        id: String,
        name: String,
        email: String,
        message: String
    },
    addon_games: {},
    paypal_details: {
        payer_id: String,
        payment_id: String,
        payment_token: String,
        return_url: String,
    },
    star_registration_number: Number,
    logged: {type: Boolean, default: false},
    shipped: {type: Boolean, default: false},
  });

  module.exports = mongoose.model('Order', orderSchema);