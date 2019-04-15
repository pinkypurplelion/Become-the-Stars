import React, { Component } from 'react';

class OrderConfirmation extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
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

                {values.recipient = 'true' &&
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
                            </div>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-outline-info form-button-promo">Apply Promo</button>
                        </div>
                    </div>
                </form>
                <hr class="bts-hr-white" />
                <div class="row">
                    <div class="col-5">
                        <p class="form-total"> Order Total: </p>
                    </div>
                    <div class="col-1">
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