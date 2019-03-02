import React, { Component } from 'react';

class Banner extends Component {
    render() {
      return (
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" id="carousel-item-title" data-interval="5000">
                    <img src='https://kbdevstorage1.blob.core.windows.net/asset-blobs/19522_en_1' class="w-100" alt="Banner of Stars"/>
                    <div class="carousel-caption">
                        <h1 class="carousel-title">Become the Stars</h1>
                        <p class="carousel-subtitle">name a special star after a special someone</p>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }


export default Banner;