const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const unitools = require('./universal-tools');

var mongoose = require('mongoose');
var Order = require('./models/Order');
var Star = require('./models/Star');
var Promo = require('./models/Promo.js');

//Connect to database
// mongoose.connect('mongodb://localhost:27017/becomethestars', {useNewUrlParser: true});

//Authentication
let user = encodeURIComponent('bts_backend'),
password = encodeURIComponent('gHRcSObRNNw72DmI')
mongoose.connect(`mongodb+srv://${user}:${password}@cluster0-vyboo.mongodb.net/becomethestars?retryWrites=true`, {useNewUrlParser: true});

//Verify connection to database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies
app.use(cors({//http://localhost:3000
    origin: 'https://becomethestars.com'
}));

const port = 3001;


function authenticateUser(authID) {

};

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api', (req, res) => res.send('this is api route'));

app.get('/get/:authID/promos', (req, res) => {
    Promo.find({}, (error, promos) => {
        console.log('Sending promo codes to client.');
        res.send(promos);
    });
});

app.post('/post/promos', (req,res) => {
    console.log(req.body);
    var promo = new Promo(req.body);
    promo.save(function (err, order) {
        if (err) return console.error(err);
        console.log('Promo Saved');
        res.send("promotion added");
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
    // console.log(req);
    const userData = req.body['form'];
    const paymentData = req.body['payment'];
    console.log('processing form submit data');
    console.log(userData, paymentData);
    
    let uid, oid, srn, sin;
    let rid = '';

    
    let urecip = false;
    let recipient_data = {};
    let extras_data = {};
    let addon_games = {};
    
    unitools.generateAlphanumericString(10, id => uid = id);
    unitools.generateAlphanumericString(10, id => oid = id, false);
    unitools.generateAlphanumericString(11, id => srn = id, false);
    unitools.generateAlphanumericString(10, id => sin = id, false);

    if (userData.recipient === 'true') {
        unitools.generateAlphanumericString(10, id => rid = id);
        urecip = true;
        recipient_data = {id: rid, name: userData.recipient_name, email: userData.recipient_email, message: userData.recipient_message};
    }
        
    if (userData.ksp === 'true')
        addon_games['ksp'] = true

    if (userData.us2 === 'true')
        addon_games['us2'] = true

    if (userData.se === 'true')
        addon_games['se'] = true

    if (userData.astrology_package === 'true')
        extras_data['astrology_package'] = {
            price: userData.astrology_package_price,
            astrology_sign: userData.astrology_sign
        }
    
    if (userData.embossed_certificate === 'true')
        extras_data['embossed_certificate'] = true;

    if (userData.a3_star_chart === 'true')
        extras_data['a3_star_chart'] = true;

    if (userData.book_space_hard === 'true')
        extras_data['book_space_hard'] = true;

    if (userData.book_star_hard === 'true')
        extras_data['book_star_hard'] = true;

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
        addon_games: addon_games,
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
