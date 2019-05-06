import React, { Component } from 'react';
import PaypalButton from './../components/paypal-button'

const CLIENT = {
    sandbox: 'AVG6Fjd3v6tUB6dvhQxGhIBZgEvzE3sGDMxUP_eAVcEe69Z2hgheMguLOIaQmjA1817pIyMqbisLshrJ',
    production: 'AcS312DYyx4CSn9Vcq95s4fwCS2IAmx6jGOgqZGzmHYDn3_mv6ZdOmi8J-plUNueyTxoTGyLIFCZQoVC',
}

const ENV = process.env.NODE_ENV === 'production' ? 'production' : 'sandbox';



class PaymentSelection extends Component {
    onSuccess = (payment) => {
        console.log('Successful payment!');
        this.sendDataToServer(this.props.values, payment)
    }
    
    onError = (error) => {
        console.log('Erroneous payment OR failed to load script!');
    }
    
    onCancel = (data) => {
        console.log('Cancelled payment!');
    }
    
    sendDataToServer = (data, payment) => {
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

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props;
        return(
            <div>
                <h1 className="ui centered">Payment</h1>
                <PaypalButton
                            client={CLIENT}
                            env={ENV}
                            commit={true}
                            currency={'AUD'}
                            total={values.order_total}
                            onSuccess={this.onSuccess}
                            onError={this.onError}
                            onCancel={this.onCancel}
                        />
                <p class="mob-notice">You may need to click the checkout button more than once for the Paypal window to open.</p>
                <hr class="bts-hr-white" />
                <div class="row">
                    <div class="col-4">
                        <p class="form-total"> Order Total: </p>
                        {values.discount > 0 && <p class="text-muted form-discount">Discount: ${values.discount}</p>}
                    </div>
                    <div class="col-2">
                        <p class="form-total-money">${values.order_total}</p>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-info form-button" onClick={this.back}>Back</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PaymentSelection;