import React, { Component } from 'react';
import './../css/bootstrap.min.css'
import './../css/becomethestars.css'

import CurrentlyUnvailable from './../media/currently-unavailable-square.jpg'


class Contact extends Component {
  render() {
    return (
        <fragment>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-8 offset-xl-2 page-heading">
                        <br/>
                        <h1 id="title">Premium Packages</h1>
                        <hr/>
                        <br/>
                    </div>
                </div>
                <div class='col-xl-6 offset-xl-3'>
                    <div class="row">
                        <br/>
                        <div class='col-xl-4'>
                            <img src={CurrentlyUnvailable} alt="" class="img-fluid"/>
                            <hr/>
                            <h1 class="package-heading">
                                Package Description
                            </h1>
                            <h1 class="package-price">
                                Starting from $30
                            </h1>
                            <p class="package-options">
                            This package is currently unavailable.
                            </p>
                        </div>
                        <div class='col-xl-8'>
                            <h1 class="package-notification">
                                Unfortunately the printing company we use is still closed after the Christmas break. Due to this, we are unable to offer our gift packages which contain printed items until they reopen. We expect the printing company to reopen in February. If you would like to know when this package is available again, enter your email to be notified below. 
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </fragment>
    );
  }
}

export default Contact;
