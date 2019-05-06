import React, { Component } from 'react';
import StarDetails from './StarDetails';
import UserDetails from './UserDetails';
import OrderConfirmation from './OrderConfirmation'
import PaymentSelection from './PaymentSelection';
// import Success from './Success';
var astro_add = 0;
var star_add = 0;
var emboss_add = 0;
var a3_add = 0;
var ksp_add = 0;
var us2_add = 0;

class MainForm extends Component {
    state = {
        step: 1,
        package_type: "premium",
        star_type: 'Constellation',
        star_hemisphere: 'Southern Hemisphere',
        star_name: '',
        message: '',
        name: '',
        base_price: 35.00,
        order_total: 35.00,
        email: '',
        astrology_package: 'false',
        astrology_package_price: 10.00,
        astrology_sign: 'Aries',
        recipient: 'false',
        recipient_name: '',
        recipient_email: '',
        recipient_message: '',
        promo: '',
        discount: 0,
        formErrors: {starName: ''},
        formValid: false,
        starNameValid: false,
        visible_star_price: -5,
        constellation_star_price: 0,
        superbright_star_price: 10,
        embossed_certificate: 'false',
        a3_star_chart: 'false',
        ksp: 'false',
        us2: 'false'
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value });

        if (input == "astrology_package") {
            if (event.target.value == "true") {
                astro_add = 10;
            }
            else {
                astro_add = 0;
            }
        }

        if (input == "star_type") {   
            if (event.target.value == "Constellation") {
                star_add = 0;
            }
            else if (event.target.value == "Superbright") {
                star_add = 10;
            }
            else if (event.target.value == "Visible") {
                star_add = -5;
            }
        }

        if (input == "embossed_certificate") {
            if (event.target.value == "true") {
                emboss_add = 10;
            }
            else {
                emboss_add = 0;
            }
        }

        if (input == "a3_star_chart") {
            if (event.target.value == "true") {
                a3_add = 5;
            }
            else {
                a3_add = 0;
            }
        }

        if (input == "ksp") {
            if (event.target.value == "true") {
                ksp_add = 40;
            }
            else {
                ksp_add = 0;
            }
        }

        if (input == "us2") {
            if (event.target.value == "true") {
                us2_add = 30;
            }
            else {
                us2_add = 0;
            }
        }
        if (this.state.base_price + astro_add + star_add + emboss_add + a3_add + ksp_add +us2_add - this.state.discount < 0) {
            this.setState({order_total: 0})
        } else {
            this.setState({order_total: this.state.base_price + astro_add + star_add + emboss_add + a3_add + ksp_add +us2_add - this.state.discount})
        }
    }

    updateDiscount = (dis) =>
    {
        this.setState({discount: dis});

        if (this.state.base_price + astro_add + star_add + emboss_add + a3_add + ksp_add +us2_add - this.state.discount < 0) {
            this.setState({order_total: 0})
        } else {
            this.setState({order_total: this.state.base_price + astro_add + star_add + emboss_add + a3_add + ksp_add +us2_add - this.state.discount})
        }
    }

    render(){
        const {step} = this.state;
        const values = this.state;
        switch(step) {
        case 1:
            return <StarDetails 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <UserDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <OrderConfirmation 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    updateDiscount = {this.updateDiscount}
                    values={values}
                    />
        case 4:
            return <PaymentSelection 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        default:
            return <h1>Form error. Please reload the page or <a href='/contact'>contact us.</a></h1>
        // case 3:
        //     return <Confirmation 
        //             nextStep={this.nextStep}
        //             prevStep={this.prevStep}
        //             values={values}
        //             />
        // case 4:
        //     return <Success />
        }
    }
}

export default MainForm;