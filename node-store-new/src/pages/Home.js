import React, { Component } from "react";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

import StarPremium from './../static/images/star-premium.jpg';
import HomeBanner from './../static/images/home-banner.jpg'


class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <title>Home | Become the Stars</title>
        </Helmet>

        {/* Desktop/Tablet Devices */}
        <div class="container-fluid d-none d-sm-block d-md-block">
          <div class="row">
            <div class="col-8 offset-2">
              <h1 class="bts-page-heading">Welcome Stargazer</h1>
              <hr class="bts-hr-white"/>
            </div>
          </div>
          <div class="row">
            <div class="col-8 offset-2">
              <p>
                Welcome to Become the Stars, the perfect place to find the perfect gift for your loved ones. The night sky is a beautiful sight, with millions of stars visible for billions and billions of kilometres. This purely majestic sight inspires those who take the time to admire this feat of our universe, and creates a bond between those who share a moment in the stars. We strive to help you achieve this bond, by letting you name your very own stellar star after your very own special person. What an amazing devotion of love and admiration it is to name a star after someone, one that is guaranteed to ignite that special bond between you.
              </p>
              <hr class="bts-hr-white"/>
              <div class="card">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img class="img-fluid horizontal-img home-image" src={StarPremium} alt="Card cap" />
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Premium Gift Package</h4>
                        <p class="card-text">The greatest gift for your perfect person, and it happens to be our most popular package. Not only do you get a premium digital gift package, but we also send you physical copies of your star naming certificates, making a stellar present. </p>
                        <Link style={{fontSize: "1.75vw", color: "white"}} to="/store/premium">Buy Now >></Link>
                    </div>
                </div>
              </div>
              <hr class="bts-hr-white"/>
                <p>
                  Stars are magical constructions of nature, littering the sky with their majestic luminance, sure to catch the attention of anyone who dare gaze upon their beautiful faces. To name a star is to profess your love for another person, to categorise their brilliance with that of the stars which live in the furthest outreaches of space. This devotion, pure dedication to a single person is a sign of the upmost love and admiration you have of them. Not only do they receive the understanding of your love, but also a series of stellar gifts reminding them of their everpresent name in the night sky.
                </p>
            </div>
          </div>
        </div>
        
        {/* Mobile Devices */}
        <div class="container-fluid d-block d-sm-none d-md-none">
          <div class="row">
            <div class="col-10 offset-1">
              <h1 class="bts-page-heading">Welcome Stargazer</h1>
              <hr class="bts-hr-white"/>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <p>
                Welcome to Become the Stars, the perfect place to find the perfect gift for your loved ones. The night sky is a beautiful sight, with millions of stars visible for billions and billions of kilometres. This purely majestic sight inspires those who take the time to admire this feat of our universe, and creates a bond between those who share a moment in the stars. We strive to help you achieve this bond, by letting you name your very own stellar star after your very own special person. What an amazing devotion of love and admiration it is to name a star after someone, one that is guaranteed to ignite that special bond between you.
              </p>
              <hr class="bts-hr-white"/>
              <div class="card">
                <div class="card">
                    <div class="img-square-wrapper">
                        <img class="img-fluid" src={HomeBanner} alt="Card cap" />
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Premium Gift Package</h4>
                        <p class="card-text">The greatest gift for your perfect person, and it happens to be our most popular package. Not only do you get a premium digital gift package, but we also send you physical copies of your star naming certificates, making a stellar present. </p>
                        <Link style={{fontSize: "5vw", color: "white"}} to="/store/premium">Buy Now >></Link>
                    </div>
                </div>
              </div>
              <hr class="bts-hr-white"/>
                <p>
                  Stars are magical constructions of nature, littering the sky with their majestic luminance, sure to catch the attention of anyone who dare gaze upon their beautiful faces. To name a star is to profess your love for another person, to categorise their brilliance with that of the stars which live in the furthest outreaches of space. This devotion, pure dedication to a single person is a sign of the upmost love and admiration you have of them. Not only do they receive the understanding of your love, but also a series of stellar gifts reminding them of their everpresent name in the night sky.
                </p>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
 
export default Home;