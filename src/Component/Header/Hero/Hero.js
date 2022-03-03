import React from 'react';
import './Hero.css';
import './Hero.media.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="hero-text">
                            <h1>Discover, and collect Digital Art  NFTs </h1>
                            <p>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
                        </div>
                        <div className="explore-now">
                            <button className="btn">Explore Now</button>
                        </div>
                        <div className="count">
                            <div className="row">
                                <div className="col-4">
                                    <p>98K+</p>
                                    <span>Artwork</span>
                                </div>
                                <div className="col-4">
                                    <p>98K+</p>
                                    <span>Auction</span>
                                </div>
                                <div className="col-4">
                                    <p>98K+</p>
                                    <span>Artist</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;