import React from 'react';
import './HighestBid.css';
import './HighestBid.media.css';
import { FaEthereum } from "react-icons/fa";

const HighestBid = (props) => {
    const { avatar, img, bid, stock } = props.highestBid;


    return (
        <div className="highestBid">
            <div className="highestBid-card" style={{ width: '100%' }}>
                <img src={img} className="card-img-top mb-3 " alt=""/>
                <div className="card-body highest-bid-body d-flex justify-content-between">
                    <div>
                        <img src={avatar} alt="" />
                    </div>
                    <div>
                        <h5 className="highest-bid-title">The Futr Abstr</h5>
                        <p className="highest-bid-subtitle text-muted">{stock} in the Stock</p>
                    </div>
                    <div>
                        <p className="bid-title ">Highest Bid</p>
                        <h6 className="bid-subtitle  text-muted"><FaEthereum /> {bid} ETH</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HighestBid;