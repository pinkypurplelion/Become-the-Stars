import React, { Component } from 'react';

class UserDetails extends Component{

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
                <h1 className="ui centered">Your Details</h1>
                <form>
                    <div class="form-group">
                        <label for="name" class="form-label">Your Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Jane Smith" value={values.name} onChange={this.props.handleChange('name')} />
                    </div>
                    
                    <div class="form-group">
                        <label for="email" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="jane@smith.com" value={values.email} onChange={this.props.handleChange('email')} />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div class="form-group">
                        <label for="recipient" class="form-label">Gift Recipient</label>
                        <select class="form-control" id="recipient" value={values.recipient} onChange={this.props.handleChange('recipient')} aria-describedby="recipHelp">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        <small id="recipHelp" class="form-text text-muted">Enter the details of another person to receive an email from us containing the digital certificates.</small>
                    </div>

                    {values.recipient == 'true' &&
                        <div>
                            <div class="form-group">
                                <label for="recipient_name" class="form-label">Recipient Name</label>
                                <input type="text" class="form-control" id="recipient_name" placeholder="Josh Smith" value={values.recipient_name} onChange={this.props.handleChange('recipient_name')} />
                            </div>
                        
                            <div class="form-group">
                                <label for="recipient_email" class="form-label">Recipient Email Address</label>
                                <input type="recipient_email" class="form-control" id="recipient_email" aria-describedby="emailHelp" placeholder="josh@smith.com" value={values.recipient_email} onChange={this.props.handleChange('recipient_email')} />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                        </div>
                    }

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
                </form>
            </div>
        )
    }
}

export default UserDetails;