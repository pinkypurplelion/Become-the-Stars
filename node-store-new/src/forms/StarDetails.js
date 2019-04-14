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
                        <label for="star_name" class="form-label">Star Name</label>
                        <input type="text" class="form-control" id="star_name" placeholder="Star name" value={values.star_name} onChange={this.props.handleChange('star_name')} />
                    </div>
                    <div class="form-group">
                        <label for="star_type" class="form-label">Select Star Type</label>
                        <select class="form-control" id="star_type" value={values.star_type} onChange={this.props.handleChange('star_type')}>
                            <option value="Visible">Visible Star</option>
                            <option value="Constellation">Constellation Star (+$5.00)</option>
                            <option value="Superbright">Superbright Star (+$10.00)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="star_hemisphere" class="form-label">Select Star Location</label>
                        <select class="form-control" id="star_hemisphere" value={values.star_hemisphere} onChange={this.props.handleChange('star_hemisphere')}>
                            <option>Southern Hemisphere</option>
                            <option>Northern Hemisphere</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="astrology_package" class="form-label">Include Astrology Package</label>
                        <select class="form-control" id="astrology_package" value={values.astrology_package} onChange={this.props.handleChange('astrology_package')}>
                            <option value="false">No</option>
                            <option value="true">Yes (+${values.astrology_package_price}.00)</option>
                        </select>
                    </div>

                    {values.astrology_package == "true" &&
                        <div class="form-group">
                            <label class="form-label" for="astrology_sign">Zodiac Sign</label>
                            <select id="astrology_sign" class="form-control" value={values.astrology_sign} onChange={this.props.handleChange('astrology_sign')}>
                                <option value="Aries">Aries (Mar 21 - Apr 19)</option>
                                <option value="Taurus">Taurus (Apr 20 - May 20)</option>
                                <option value="Gemini">Gemini (May 21 - Jun 20)</option>
                                <option value="Cancer">Cancer (Jun 21 - Jul 22)</option>
                                <option value="Leo">Leo (Jul 23 - Aug 22)</option>
                                <option value="Virgo">Virgo (Aug 23 - Sep 22)</option>
                                <option value="Libra">Libra (Sep 23 - Oct 22)</option>
                                <option value="Scorpio">Scorpio (Oct 23 - Nov 21)</option>
                                <option value="Sagittarius">Sagittarius (Nov 22 - Dec 21)</option>
                                <option value="Capricorn">Capricorn (Dec 22 - Jan 19)</option>
                                <option value="Aquarius">Aquarius (Jan 20 - Feb 18)</option>
                                <option value="Pisces">Pisces (Feb 19 - Mar 20)</option>
                            </select>
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
                            <button class="btn btn-outline-info form-button" disabled>Back</button>
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

export default StarDetails;