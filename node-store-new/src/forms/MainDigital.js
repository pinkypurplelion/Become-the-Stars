import React, { Component } from 'react';
import StarDetails from './StarDetails';
import UserDetails from './UserDetails';
// import Confirmation from './Confirmation';
// import Success from './Success';

class MainForm extends Component {
    state = {
        step: 1,
        star_type: 'Visible Star',
        star_hemisphere: 'Southern Hemisphere',
        star_name: '',
        name: '',
        order_total: 15.00,
        email: '',
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
    }

    render(){
        const {step} = this.state;
        const {star_type, star_hemisphere, star_name, name, order_total, email,} = this.state;
        const values = {star_type, star_hemisphere, star_name, name, order_total, email,};
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