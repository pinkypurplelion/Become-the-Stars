import React, { Component } from 'react';
import Iframe from 'react-iframe'
import './../css/bootstrap.min.css'
import './../css/becomethestars.css'

class Contact extends Component {
  render() {
    return (
        <fragment>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-8 offset-xl-2 page-heading">
                        <br/>
                        <h1>Contact Us</h1>
                        <hr/>
                        <br/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLScvH5wZb4Rb5V2zm5PKoPodJ1jzzW27tzVG2z2_72WnOuotbw/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0" height="858" style="width: 100%" />
                    </div>
                </div>
            </div>
        </fragment>
    );
  }
}

export default Contact;
