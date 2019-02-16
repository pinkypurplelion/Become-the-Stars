import React, { Component } from 'react';
import './../css/bootstrap.min.css'
import './../css/becomethestars.css'

import PIA15630 from './../media/PIA15630.jpg'

class Index extends Component {
  render() {
    return (
        <fragment>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-8 offset-xl-2 page-heading">
                        <br/>
                        <h1>Welcome</h1>
                        <hr/>
                        <br/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-8 offset-xl-2 page-body">
                        <p>
                            Welcome to Become the Stars, the perfect place to find the perfect gift for your loved ones. The night sky is a beautiful sight, with millions of stars visible for billions and billions of kilometres. This purely majestic sight inspires those who take the time to admire this feat of our universe, and creates a bond between those who share a moment in the stars. We strive to help you achieve this bond, by letting you name your very own stellar star after your very own special person. What an amazing devotion of love and admiration it is to name a star after someone, one that is guaranteed to ignite that special bond between you.
                        </p>
                        <hr/>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xl-8">
                        <figure>
                            <img src={PIA15630} class="img-fluid"/>
                        </figure>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-8 offset-xl-2 page-body">
                        <p>
                            Stars are magical constructions of nature, littering the sky with their majestic luminance, sure to catch the attention of anyone who dare gaze upon their beautiful faces. To name a star is to profess your love for another person, to categorise their brilliance with that of the stars which live in the furthest outreaches of space. This devotion, pure dedication to a single person is a sign of the upmost love and admiration you have of them. Not only do they receive the understanding of your love, but also a series of stellar gifts reminding them of their everpresent name in the night sky. 
                        </p>
                        
                    </div>
                    <br/>
                    <div class="col-xl-8 offset-xl-2 text-center">
                        <a href="store.html#title" class="btn btn-primary">Our Stellar Packages</a>
                        <hr />
                    </div>
                </div>
            </div>
        </fragment>
    );
  }
}

export default Index;