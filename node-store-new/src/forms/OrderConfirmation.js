import React, { Component } from 'react';

class OrderConfirmation extends Component{

    state = {
        promo_valid: false,
        promo_error: '',
    }

    sendDataToServer = (data, payment, callback) => {
        fetch('https://www.becomethestars.com/api/post/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'form': data, 'payment': payment})
        }).then(setTimeout(function(){
            // window.location.replace("https://www.becomethestars.com/#/thanks");
            callback();
        }, 2000))
    }

    saveAndContinue = (e) => {
        e.preventDefault()
        // console.log(this.props.values.order_total)
        if (this.props.values.order_total > 0) {
            this.props.nextStep()
        } else {
            this.sendDataToServer(this.props.values, {}, this.props.nextStep)
        }
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    checkPromoCode = (e) => {
        e.preventDefault()
        console.log("checking promo code")
        fetch('https://www.becomethestars.com/api/verify/promo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'code': this.props.values.promo})
        }).then(response => response.json())
        .then(data => {
            if (data['valid'] == true) {
                this.setState({
                    promo_valid: true
                })
                this.setState({
                    promo_error: 'Promo code accepted'
                })
                this.setState({
                    discount: data['promo']['discount']
                })
                console.log(`Promo code is valid. Discount Type ${data['promo']['discount_type']}, Discount ${data['promo']['discount']}`);
                this.props.updateDiscount(data['promo']['discount'])
                this.forceUpdate();
            }
            if (data['valid'] == false) {
                this.setState({
                    promo_valid: false
                })
                this.setState({
                    promo_error: 'Not valid because promo code '+data['reason']
                })
                console.log('Promo code not valid becuase '+data['reason']);}
        });
    }

    render(){
        const { values } = this.props;

        return(
            <div>
                <h1 className="ui centered">Review Order</h1>

                <p class="form-label">Star Name</p>
                <p class="form-p-overview">{values.star_name}</p>

                <p class="form-label">Star Type</p>
                <p class="form-p-overview">{values.star_type}</p>

                <p class="form-label">Star Location</p>
                <p class="form-p-overview">{values.star_hemisphere}</p>

                {values.message.length > 0 &&
                    <div>
                        <p class="form-label">Certificate Message</p>
                        <p class="form-p-overview">{values.message}</p>
                    </div>
                }
                
                {values.astrology_package == 'true' &&
                    <div>
                        <p class="form-label">Zodiac Sign (For Astrology Package)</p>
                        <p class="form-p-overview">{values.astrology_sign}</p>
                    </div>
                }

                <p class="form-label">Name</p>
                <p class="form-p-overview">{values.name}</p>

                <p class="form-label">Email</p>
                <p class="form-p-overview">{values.email}</p>

                {values.recipient == 'true' &&
                    <div>
                        <p class="form-label">Recipient Name</p>
                        <p class="form-p-overview">{values.recipient_name}</p>

                        <p class="form-label">Recipient Email</p>
                        <p class="form-p-overview">{values.recipient_email}</p>

                        <p class="form-label">Message for Recipient</p>
                        <p class="form-p-overview">{values.recipient_message}</p>
                    </div>
                }
                
                
                <form>
                    <label for="promo" class="form-label">Promo Code</label>
                    <div class="row">
                        <div class="col-8">
                            <div class="form-group">
                                <input type="text" class="form-control" id="promo" placeholder="Promo code" value={values.promo} onChange={this.props.handleChange('promo')} />
                                <small id="promoError" class="form-text text-muted">{this.state.promo_error}</small>
                            </div>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-outline-info form-button-promo" onClick={this.checkPromoCode}>Apply Promo</button>
                        </div>
                    </div>
                </form>
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
                    <div class="col-3">
                        <button class="btn btn-outline-info form-button" onClick={this.saveAndContinue}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderConfirmation;