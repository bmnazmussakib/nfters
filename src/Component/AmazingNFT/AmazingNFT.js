import React from 'react';
import './AmazingNFT.css';
import './AmazingNFT.media.css';
import card from '../../icons/card-tick.svg';
import chart from '../../icons/chart-square.svg';

const AmazingNFT = () => {


    return (
        <div className="amazing-NFT">
            <div className="container ">
                <div className="row amazing-container">
                    <div className="col-lg-4">
                        <div className="amaze-text">
                            <h3>The amazing NFT art of the world here</h3>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="amaze-card">
                            <div className="row">
                                <div className="col-3">
                                    <div className="amaze-card-img">
                                        <img src={card} alt="" />
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="amaze-card-text">
                                        <h5>Fast Transaction</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="amaze-card">
                            <div className="row">
                                <div className="col-3">
                                    <div className="amaze-card-img">
                                        <img src={chart} alt="" />
                                    </div>
                                    <div className="row">
                                        <div className="col-9"></div>
                                        <div className="col-3"></div>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="amaze-card-text">
                                        <h5>Growth Transaction</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default AmazingNFT;