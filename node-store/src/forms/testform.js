import React, {Fragment, Component} from 'react';
import { Form, Text, Select, Option, TextArea } from 'informed';
import PaypalButton from './../components/paypal-button.js'
import { render } from 'react-dom';
import 'whatwg-fetch'

import { Redirect } from "react-router-dom"


var success = false;

const CLIENT = {
    sandbox: 'AVG6Fjd3v6tUB6dvhQxGhIBZgEvzE3sGDMxUP_eAVcEe69Z2hgheMguLOIaQmjA1817pIyMqbisLshrJ',
    production: 'AcS312DYyx4CSn9Vcq95s4fwCS2IAmx6jGOgqZGzmHYDn3_mv6ZdOmi8J-plUNueyTxoTGyLIFCZQoVC',
}

const ENV = process.env.NODE_ENV === 'production' ? 'production' : 'sandbox';

const onSuccess = (payment) => {
   // console.log('Successful payment!', payment);
    console.log('Successful payment!');
    sendDataToServer(userData, payment)
}
//alert('Thankyou for your purchase. You should receive an email from Paypal with your receipt, and from Become the Stars with your package within 24 hours.').then()
const onError = (error) => {
    // console.log('Erroneous payment OR failed to load script!', error);
    console.log('Erroneous payment OR failed to load script!');
}

const onCancel = (data) => {
    // console.log('Cancelled payment!', data);
    console.log('Cancelled payment!');
}

var userData = {'package': 'digital'}

var selectStarTotal = 15;
var astrologyTotal = 0;
var orderTotal = selectStarTotal + astrologyTotal;

const sendDataToServer = (data, payment) => {
    console.log("sending data to server")
    //console.log(JSON.stringify({'form': data, 'payment': payment}))
    fetch('http://localhost:3001/post/form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'form': data, 'payment': payment})
    }).then(setTimeout(function(){
        window.location.replace("http://localhost:3000/thanks");
    }, 2000))
}

const onChangeStarType = (e) => {
    const target = e.target;
    if (target.value === 'star_visible') {
        selectStarTotal = 15;
        orderTotal = selectStarTotal + astrologyTotal;
    }
    else if (target.value === 'star_constellation') {
        selectStarTotal = 20;
        orderTotal = selectStarTotal + astrologyTotal;
    }
    else if (target.value === 'star_superbright') {
        selectStarTotal = 25;
        orderTotal = selectStarTotal + astrologyTotal;
    }
    
}

const onChangeAstrology = (e) => {
    const target = e.target;
    if (target.value === 'yes') {
        astrologyTotal = 10;
        orderTotal = selectStarTotal + astrologyTotal;
    }
    else if (target.value === 'no') {
        astrologyTotal = 0;
        orderTotal = selectStarTotal + astrologyTotal;
    }
    
}

const buttonClicked = (formState, page) => {
    if (formState.values.form_page === '1')
    {
        if (!formState.values.star_name) {
            alert("A star name is required.");
        }
        else {
            userData['star_type'] = formState.values.star_type;
            userData['star_location'] = formState.values.star_location;
            userData['star_name'] = formState.values.star_name;
            userData['price'] = orderTotal;
            if (formState.values.astrology_package === 'yes') {
                const extra = {'astrology_package': formState.values.astrology_package, 'star_sign': formState.values.star_sign}
                userData['extra'] = extra;
            }
            formState.values.form_page = '2';
        }
    } else if (formState.values.form_page === '2') {
        if (page === '1')
        {
            formState.values.form_page = '1';
        } else {
            if (!formState.values.first_name || !formState.values.email) {
                alert("All fields are required");
            } else {
                userData['first_name'] = formState.values.first_name;
                userData['last_name'] = formState.values.last_name;
                userData['email'] = formState.values.email;
                if (formState.values.gift_receiver === 'no')
                {
                    userData['receiving'] = formState.values.gift_receiver;
                    userData['receiver_name'] = formState.values.receiver_name;
                    userData['receiver_email'] = formState.values.recipient_email;
                    userData['receiver_message'] = formState.values.custom_message;
                }   
                formState.values.form_page = 'payment';
            }
        }
    } else if (formState.values.form_page === 'payment') {

    }
}

const Basic = () => (
    <Form>
        {({formState}) => (
            <div>
                <Text field="form_page" hidden initialValue="1"></Text>
                {formState.values.form_page === '1' ? <div><div class="form-group">
                    <h1 class="package-heading">
                        Package Options
                    </h1>
                    <label class="form-label">Select Star Type</label>
                    <Select field="star_type" initialValue="star_visible" placeholder="Star Type" class="form-control" onChange={onChangeStarType}>
                        <Option value="star_visible">Visible Star</Option>
                        <Option value="star_constellation">Constellation Star (+$5.00)</Option>
                        <Option value="star_superbright">Superbright Star (+$10.00)</Option>
                    </Select>
                </div>
                <div class="form-group">
                    <label class="form-label">Star Location</label>
                    <Select field="star_location" initialValue="hemisphere_south" placeholder="Star Location" class="form-control">
                        <Option value="hemisphere_south">Southern Hemisphere</Option>
                        <Option value="hemisphere_north">Northern Hemisphere</Option>
                    </Select>
                </div>
                <div class="form-group">
                    <label class="form-label">Star Name</label>
                    <Text field="star_name" class="form-control"/>
                </div>
                <div class="form-group">
                    <label class="form-label">Include Astrology Package</label>
                    <Select field="astrology_package" initialValue="no" placeholder="Astrology Package" class="form-control" onChange={onChangeAstrology}>
                        <Option value="no">No</Option>
                        <Option value="yes">Yes (+$10.00)</Option>
                    </Select>
                </div>
                </div> : null}
                {formState.values.astrology_package === 'yes' ? <div>
                <div class="form-group">
                    <label class="form-label">Zodiac Sign</label>
                    <Select field="star_sign" initialValue="Aries" placeholder="Zodiac Sign" class="form-control">
                        <Option value="aries">Aries (Mar 21 - Apr 19)</Option>
                        <Option value="taurus">Taurus (Apr 20 - May 20)</Option>
                        <Option value="gemini">Gemini (May 21 - Jun 20)</Option>
                        <Option value="cancer">Cancer (Jun 21 - Jul 22)</Option>
                        <Option value="leo">Leo (Jul 23 - Aug 22)</Option>
                        <Option value="virgo">Virgo (Aug 23 - Sep 22)</Option>
                        <Option value="libra">Libra (Sep 23 - Oct 22)</Option>
                        <Option value="scorpio">Scorpio (Oct 23 - Nov 21)</Option>
                        <Option value="sagittarius">Sagittarius (Nov 22 - Dec 21)</Option>
                        <Option value="capricorn">Capricorn (Dec 22 - Jan 19)</Option>
                        <Option value="Aquarius">Aquarius (Jan 20 - Feb 18)</Option>
                        <Option value="Pisces">Pisces (Feb 19 - Mar 20)</Option>
                    </Select>
                </div>
                </div> : null}

                {formState.values.form_page === '2' ? <div>
                    <h1 class="package-heading">
                        Your Details
                    </h1>
                    <div class="form-group">
                        <div class="form-group">
                            <label class="form-label">First Name</label>
                            <Text field="first_name" class="form-control"/>
                            <label class="form-label">Last Name</label>
                            <Text field="last_name" class="form-control"/>
                            <label class="form-label">Email</label>
                            <Text field="email" class="form-control"/>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Did you want to receive the gift package to your email</label>
                            <Select field="gift_receiver" initialValue="yes" placeholder="Star Location" class="form-control">
                                <Option value="yes">Yes</Option>
                                <Option value="no">No</Option>
                            </Select>
                            {formState.values.gift_receiver === "no" ? <div class="form-group">
                                <label class="form-label">Recipient's Name</label>
                                <Text field="recipient_name" class="form-control" />
                                <label class="form-label">Recipient's Email</label>
                                <Text field="recipient_email" class="form-control" />
                                <label class="form-label">Custom Message</label>
                                <TextArea class="form-control" field="custom_message"/>
                            </div> : null}
                        </div>
                    </div> 
                    
                </div> : null}
                {formState.values.form_page === "payment" ? <div>
                    <h1 class="package-heading">Use the checkout button below to finalise order</h1>
                    <div>
                        <p class="package-price">Order Total: ${orderTotal}.00</p>
                        <PaypalButton
                            client={CLIENT}
                            env={ENV}
                            commit={true}
                            currency={'AUD'}
                            total={orderTotal}
                            onSuccess={onSuccess}
                            onError={onError}
                            onCancel={onCancel}
                        />
                        <p class="mob-notice">You may need to click the checkout button more than once for the Paypal window to open.</p>
                    </div>
                </div> : null}
                <hr />
                <div class="row">
                    <div class="col-xl-8">
                        <div class="row">
                            <div class="col-xl-8">
                                <p class="form-total">
                                    {formState.values.form_page !== 'payment' ? 'Order Total:' : null}
                                </p>
                            </div>
                            <div class="col-xl-4">
                                <p class="form-total text-right">
                                {formState.values.form_page !== 'payment' ? <Fragment>${orderTotal}.00</Fragment> : null}
                                </p>
                            </div> 
                        </div>
                    </div>
                    
                    {formState.values.form_page === '1' ? <div class="col-xl-4"><button type="submit" onClick={() => {buttonClicked(formState, '')}} class="btn btn-outline-info form-button">Next ></button></div> : null}
                    {formState.values.form_page === '2' ? <Fragment>
                        <div class="col-xl-2"><button type="submit" onClick={() => {buttonClicked(formState, '1')}} class="btn btn-outline-info form-button">Back </button></div>
                        <div class="col-xl-2"><button type="submit" onClick={() => {buttonClicked(formState, '')}} class="btn btn-outline-info form-button">Pay ></button></div>
                    </Fragment> : null}
                    
                </div>
            </div>
        )}
    </Form>
);

export default Basic;