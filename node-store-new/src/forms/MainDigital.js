import React, { Component } from 'react';
import StarDetails from './StarDetails';
import UserDetails from './UserDetails';
import OrderConfirmation from './OrderConfirmation'
import PaymentSelection from './PaymentSelection';
// import Success from './Success';
var astro_add = 0;
var star_add = 0;

class MainForm extends Component {
    state = {
        step: 1,
        package_type: "digital",
        star_type: 'Visible',
        star_hemisphere: 'Southern Hemisphere',
        star_name: '',
        name: '',
        base_price: 15.00,
        order_total: 15.00,
        email: '',
        astrology_package: 'false',
        astrology_package_price: 10.00,
        astrology_sign: 'Aries',
        recipient: 'true',
        recipient_name: '',
        recipient_email: '',
        recipient_message: '',
        promo: '',
        discount: 0,
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
        this.setState({ [input] : event.target.value })
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
                star_add = 5;
            }
            else if (event.target.value == "Superbright") {
                star_add = 10;
            }
            else if (event.target.value == "Visible") {
                star_add = 0;
            }
        }
        this.setState({order_total: this.state.base_price + astro_add + star_add - this.state.discount})
    }

    render(){
        const {step} = this.state;
        const {package_type, star_type, star_hemisphere, star_name, name, order_total, email, astrology_package, astrology_package_price, astrology_sign, recipient, recipient_name, recipient_email, recipient_message, promo, discount} = this.state;
        const values = {package_type, star_type, star_hemisphere, star_name, name, order_total, email, astrology_package, astrology_package_price, astrology_sign, recipient, recipient_name, recipient_email, recipient_message, promo, discount};
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
            return <h1>Form error. Please reload the page or <a href='/#/contact'>contact us.</a></h1>
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