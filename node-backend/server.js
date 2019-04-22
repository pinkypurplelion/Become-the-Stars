const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const unitools = require('./universal-tools');

var mongoose = require('mongoose');
var Order = require('./models/Order');
var Star = require('./models/Star');
var Promo = require('./models/Promo.js');

//Connect to database
mongoose.connect('mongodb://localhost:27017/becomethestars', {useNewUrlParser: true});

//Authentication
let user = encodeURIComponent('Admin'),
password = encodeURIComponent('Willy Wonka Chocolate Factory')
// mongoose.connect(`mongodb://${user}:${password}@localhost:27017/becomethestars`, {useNewUrlParser: true});

//Verify connection to database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies
app.use(cors({
    origin: 'http://localhost:3000'
}));

const port = 3001;


app.get('/', (req, res) => res.send('Hello World!'));

app.get('/get/:authID/promos', (req, res) => {
    Promo.find({}, (error, promos) => {
        console.log('Sending promo codes to client.');
        res.send(promos);
    });
});

app.post('/verify/promo', (req, res) => {
    let today = new Date();
    console.log('Verifying promo code');
    const promo_code = req.body['code'];
    Promo.findOne({code: promo_code}, (error, promo) =>{
        if (error) {console.log('error when finding promo code db entry'); return res.send(error);}
        if (promo) {
            let expiration_date = promo.expiration_date;
            if (expiration_date >= today) {
                console.log('promo code valid');
                return res.send({valid: true, reason: 'valid', promo: promo})
            }
            else {
                console.log('promo code expired');
                return res.send({valid: false, reason: 'expired'});
            }
        }
        else {
            console.log('promo code not found');
            res.send({valid: false, reason: 'not found'});
        }  
    })
});

app.post('/post/form', (req, res) => {
    const userData = req.body['form'];
    const paymentData = req.body['payment'];
    console.log('processing form submit data');
    // console.log(userData, paymentData);
    
    let uid, oid, srn, sin;
    let rid = '';

    
    let urecip = false;
    let recipient_data = {};
    let extras_data = {};
    
    unitools.generateAlphanumericString(10, id => uid = id);
    unitools.generateAlphanumericString(10, id => oid = id, false);
    unitools.generateAlphanumericString(11, id => srn = id, false);
    unitools.generateAlphanumericString(10, id => sin = id, false);

    if (userData.recipient === 'true') {
        unitools.generateAlphanumericString(10, id => rid = id);
        urecip = true;
        recipient_data = {id: rid, name: userData.recipient_name, email: userData.recipient_email, message: userData.recipient_message};
    }


    if (userData.astrology_package === 'true')
        extras_data = {astrology_package: {
            price: userData.astrology_package_price,
            astrology_sign: userData.astrology_sign
        }}
        
    
    let package_data = {tier: userData.package_type,
        extras: extras_data,
    };

    var order = new Order({
        order_id: oid,
        package: package_data, 
        customer: {
            id: uid,
            name: userData.name,
            email: userData.email
        }, 
        price: userData.order_total, 
        message: userData.message,
        is_user_recipient: urecip, 
        recipient: recipient_data, 
        paypal_details: {
            payer_id: paymentData.payerID,
            payment_id: paymentData.paymentID,
            payment_token: paymentData.paymentToken,
            return_url: paymentData.returnUrl
        }, 
        star_registration_number: srn,
    });

    order.save(function (err, order) {
        if (err) return console.error(err);
        console.log('Order Saved');
    });

    var star = new Star({
        identification_number: sin,
        name: userData.star_name,
        location_coordinates: "",
        location_hemisphere: userData.star_hemisphere,
        type: userData.star_type,
        unique: false,
        star_registration_number: srn
    })

    star.save(function (err, star) {
        if (err) return console.error(err);
        console.log('Star Saved');
    });

    res.send("Data Received")
});


app.listen(port, () => console.log(`Server listening on port ${port}!`));
