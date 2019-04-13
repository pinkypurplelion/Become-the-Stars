import React, { Component } from 'react';

class StarDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <div>
                <h1 className="ui centered">Package Options</h1>
                <form>
                    <div class="form-group">
                        <label for="star_name">Star Name</label>
                        <input type="text" class="form-control" id="star_name" placeholder="Star name" value={values.star_name} onChange={this.props.handleChange('star_name')} />
                    </div>
                    <div class="form-group">
                        <label for="star_type">Select Star Type</label>
                        <select class="form-control" id="star_type" value={values.star_type} onChange={this.props.handleChange('star_type')}>
                            <option>Visible Star</option>
                            <option>Constellation Star (+$5.00)</option>
                            <option>Superbright Star (+$10.00)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="star_hemisphere">Select Star Location</label>
                        <select class="form-control" id="star_hemisphere" value={values.star_hemisphere} onChange={this.props.handleChange('star_hemisphere')}>
                            <option>Southern Hemisphere</option>
                            <option>Northern Hemisphere</option>
                        </select>
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
                            <button class="btn btn-outline-info form-button" disabled>Back</button>
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

export default StarDetails;