import React, { Component } from 'react';
import './../css/bootstrap.min.css'
import './../css/becomethestars.css'
import DigitalImage from './../media/Orion_Nebula_-_Hubble_2006_res_2.jpg'
import Basic from './../forms/testform.js'


class Contact extends Component {
  render() {
    return (
        <fragment>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-8 offset-xl-2 page-heading">
                        <br/>
                        <h1 id="title">Digital Package</h1>
                        <hr/>
                        <br/>
                    </div>
                </div>
                <div class='col-xl-8 offset-xl-2'>
                    <div class="row">
                        <br/>
                        <div class='col-xl-4'>
                            <img src={DigitalImage} alt="" class="img-fluid"/>
                            <hr/>
                            <h1 class="package-heading">
                                Package Description
                            </h1>
                            <h1 class="package-price">
                                Starting from $15
                            </h1>
                            <p class="package-options">
                            Our digital package is perfect for those who want to print their own certificates and posters, or are buying for someone who has embraced the digital age. Not only will you be able to name a star, but will also receive our digital gift package which includes high quality digital downloads of:
                            <ul>
                                <li>A certificate of registration</li>
                                <li>An image of your registered star</li>
                                <li>A star chart describing your stars location and surrounding night sky</li>
                                <li>A star fact sheet about your star</li>
                            </ul>
                            If your special someone is interested in astrology (including things like Zodiac Signs), then you can opt for our Astrology package. This upgrade includes not only high quality digital downloads of the items listed above, but also:
                            <ul>
                                <li>A poster with a symbol of their Zodiac Sign and inspiration quote</li>
                                <li>A fact sheet about your Zodiac Sign</li>
                                <li>Specialty matching of your star to your Zodiac Sign</li>
                                <li>Access to our exclusive Star Gazers club</li>
                            </ul>
                            </p>
                        </div>
                        <div class='col-xl-8'>
                            <Basic />
                        </div>
                    </div>
                </div>
            </div>
        </fragment>
    );
  }
}

export default Contact;
