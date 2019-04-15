var mongoose = require('mongoose');
var Order = require('./models/Order');

//Connect to database
mongoose.connect('mongodb://localhost:27017/becomethestars', {useNewUrlParser: true});

//Verify connection to database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    var new_order = new Order({
        order_id: 'this is an id',
        package: {
            tier: 'digital',
            extras: {
                astrology_package: {
                    price: 10,
                    astrology_sign: 'aries',
                },
            },
        },
    });
    console.log(new_order.order_id);

    new_order.save(function (err, new_order) {
        if (err) return console.error(err);
        console.log('saved');
    });

    // var kittySchema = new mongoose.Schema({
    //     name: String
    // });

    // kittySchema.methods.speak = function () {
    //     var greeting = this.name
    //       ? "Meow name is " + this.name
    //       : "I don't have a name";
    //     console.log(greeting);
    //   }
    
    // var Kitten = mongoose.model('Kitten', kittySchema);
    // var silence = new Kitten({ name: 'Silence' });
    // console.log(silence.name); // 'Silence'

    // var fluffy = new Kitten({ name: 'fluffy' });
    // fluffy.speak(); // "Meow name is fluffy"

    // fluffy.save(function (err, fluffy) {
    //     if (err) return console.error(err);
    //     fluffy.speak();
    // });

    // Kitten.find(function (err, kittens) {
    // if (err) return console.error(err);
    // console.log(kittens);
    // });

});