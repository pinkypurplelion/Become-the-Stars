import React, { Component } from 'react';
import StarDetails from './StarDetails';
import UserDetails from './UserDetails';
// import Confirmation from './Confirmation';
// import Success from './Success';

class MainForm extends Component {
    state = {
        step: 1,
        star_type: 'visible',
        star_hemisphere: 'Southern Hemisphere',
        star_name: '',
        name: '',
        base_price: 15.00,
        order_total: 15.00,
        email: '',
        astrology_package: false,
        astrology_package_price: 10.00,
        astrology_sign: 'aries'
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

        if ([input] == "astrology_package") {  
            console.log(this.state); 
            if (event.target.value == "true") {
                this.setState({order_total: this.state.base_price + this.state.astrology_package_price})
            }
            else {
                this.setState({order_total: this.state.base_price})
            }
        }

        if ([input] == "star_type") {   
            if (event.target.value == "constellation") {
                this.setState({order_total: this.state.base_price + 5})
            }
            else if (event.target.value == "superbright") {
                this.setState({order_total: this.state.base_price + 10})
            }
            else {
                this.setState({order_total: this.state.base_price})
            }
        }
    }

    render(){
        const {step} = this.state;
        const {star_type, star_hemisphere, star_name, name, order_total, email, astrology_package, astrology_package_price, astrology_sign} = this.state;
        const values = {star_type, star_hemisphere, star_name, name, order_total, email, astrology_package, astrology_package_price, astrology_sign};
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