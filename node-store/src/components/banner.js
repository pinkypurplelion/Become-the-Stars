import React, { Component } from 'react';
import './../css/bootstrap.min.css'
import './../css/becomethestars.css'
import banner1 from './../media/banner1.jpg'
import banner2 from './../media/banner2.jpg'

class Banner extends Component {
  render() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" id="carousel-item-title" data-interval="5000">
                    <img src={banner1} class="d-none d-sm-block w-100" alt="..."/>
                    <img src={banner2} class="d-block d-sm-none w-100" alt="..."/>
                    <div class="carousel-caption">
                        <h1 id="carouselTitle">Become the Stars</h1>
                        <p id="carouselSubtitle">name a special star after a special someone</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Banner;