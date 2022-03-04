import React from 'react';
import './BidCards.css';
import './BidCards.media.css';
import { FaEthereum } from "react-icons/fa";


const BidCards = (props) => {
    console.log(props);
    const { title, avatar, img, bid, stock } = props.bidCardInfo;



    return (
        <>
            <div className="col-lg-4 col-md-6 bid-card-img">
                <img src={img} className="img-fluid rounded-start" alt="..." />
            </div>

            <div className="col-lg-8 col-md-6">
                <div className="card-body bid-card-body">
                    <h5 className="card-title bid-card-title mb-3">{title}</h5>
                    <div className="d-flex justify-content-between mb-4">
                        <div>
                            <img src={avatar} alt="" className="img-fluid" />
                        </div>
                        <span className="bid"><FaEthereum /> {bid} ETH</span>
                        <span className="stock">1 of {stock}</span>
                    </div>
                    <div className="place-bid">
                        <button className="btn">Place a bid</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BidCards;