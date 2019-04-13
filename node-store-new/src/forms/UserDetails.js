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
                <h1 className="ui centered">Package Options</h1>
                <form>
                    <div class="form-group">
                        <label for="name">Your Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Jane Smith" value={values.name} onChange={this.props.handleChange('name')} />
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="jane@smith.com" value={values.email}/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

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
                            <button class="btn btn-outline-info form-button" onClick={this.saveAndContinue}>Next >></button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserDetails;