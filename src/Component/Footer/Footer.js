import React from 'react';
import './Footer.css';
import './Footer.media.css';
import facebook from '../../icons/facebook.svg';
import twitter from '../../icons/twitter.svg';
import linkedin from '../../icons/linkedin.svg';


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 footer-col">
                        <div className="footer-text">
                            <h1 className="footer-logo">nfters</h1>
                            <p>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
                            <div className="social-icon">
                                <a href="" className="facebook"><img src={facebook} alt="" /></a>
                                <a href="" className="twitter"><img src={twitter} alt="" /></a>
                                <a href="" className="linkedIn"><img src={linkedin} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 footer-col">
                        <h3 className="marketplace">Market place</h3>
                        <p className="marketplace-item"><a href="#">All NFTs</a></p>
                        <p className="marketplace-item"><a href="#">New</a></p>
                        <p className="marketplace-item"><a href="#">Art</a></p>
                        <p className="marketplace-item"><a href="#">Sports</a></p>
                        <p className="marketplace-item"><a href="#">Utility</a></p>
                        <p className="marketplace-item"><a href="#">Music</a></p>
                        <p className="marketplace-item"><a href="#">Domain Name</a></p>
                    </div>
                    <div className="col-lg-2 footer-col">
                        <h3 className="marketplace">My account</h3>
                        <p className="marketplace-item"><a href="#">Profile</a></p>
                        <p className="marketplace-item"><a href="#">Favorite</a></p>
                        <p className="marketplace-item"><a href="#">My Collections</a></p>
                        <p className="marketplace-item"><a href="#">Settings</a></p>
                    </div>
                    <div className="col-lg-4 footer-col">
                        <div className="footer-text subscription">
                            <h3 className="marketplace">Stay in the loop</h3>
                            <p className="marketplace-item subscribe-text">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>
                            <div id="custom-search-input">
                                <div class="input-group col-md-12">
                                    <input type="text" class="footer-search-query search-query form-control" placeholder="Enter your email address" />
                                    <button class="btn subscribe-btn" type="button">Subscribe Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;