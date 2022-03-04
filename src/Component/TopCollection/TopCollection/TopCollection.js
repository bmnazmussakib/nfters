import React from 'react';
import './TopCollection.css';
import './TopCollections.media.css';
import highestBidImg from '../../../images/asset (1).png';
import asset2 from '../../../images/asset (2).png';
import asset3 from '../../../images/asset (3).png';
import asset4 from '../../../images/asset (4).png';
import avatar1 from '../../../images/avatar 1.png';
import smallAvatar1 from '../../../images/small avatar1.png'
import HighestBid from '../HeighestBid/HighestBid';
import BidCards from '../BidCards/BidCards';
import weeklyCollection1 from '../../../images/weeklyCollection (1).png';
import weeklyCollection2 from '../../../images/weeklyCollection (2).png';
import weeklyCollection3 from '../../../images/weeklyCollection (3).png';
import weeklyCollection4 from '../../../images/weeklyCollection (4).png';
import weeklyCollection5 from '../../../images/weeklyCollection (5).png';
import WeeklyTopCollection from '../WeeklyTopCollection/WeeklyTopCollection';

const TopCollection = () => {

    const highestBid = [
        {
            avatar: avatar1,
            img: highestBidImg,
            bid: 0.25,
            stock: 10
        }
    ]

    const bidCardInfo = [
        {
            title: 'The Futr Abstr',
            avatar: smallAvatar1,
            img: asset2,
            bid: 0.25,
            stock: 8
        },
        {
            title: 'The Futr Abstr',
            avatar: smallAvatar1,
            img: asset3,
            bid: 0.25,
            stock: 8
        },
        {
            title: 'The Futr Abstr',
            avatar: smallAvatar1,
            img: asset4,
            bid: 0.25,
            stock: 8
        },
    ];

    const weeklyTopCollection = [
        {
            title: 'CryptoFunks',
            img: weeklyCollection1,
            bid: 19769.39,
            percentage: 26.52,
            verified: false
        },
        {
            title: 'Cryptix',
            img: weeklyCollection2,
            bid: 2769.39,
            percentage: 10.52,
            verified: false
        },
        {
            title: 'Frensware',
            img: weeklyCollection3,
            bid: 9232.39,
            percentage: 2.52,
            verified: false
        },
        {
            title: 'PunkArt',
            img: weeklyCollection4,
            bid: 3769.39,
            percentage: 1.52,
            verified: false
        },
        {
            title: 'Art Crypto',
            img: weeklyCollection5,
            bid: 10769.39,
            percentage: 2.52,
            verified: false
        },
    ];




    return (
        <div className="topCollection">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        {
                            highestBid.map((highestBid, index) => <HighestBid key={index} highestBid={highestBid} />)
                        }
                    </div>


                    <div className="col-lg-4 d-flex align-content-between flex-wrap">
                        <div className="bidCard mb-3">
                            <div className="row g-0 bid-card">
                                {
                                    bidCardInfo.map((bidCardInfo, index) => <BidCards key={index} bidCardInfo={bidCardInfo} />)
                                }
                            </div>
                        </div>

                    </div>


                    <div className="col-lg-4 weekly-Collection-container">
                        <h3 className="weekly-title">Top Collections over</h3>
                        <p className="weekly-subtitle">Last 7 days</p>
                        {
                            weeklyTopCollection.map((weeklyTopCollection, index) => <WeeklyTopCollection key={index} weeklyTopCollection={weeklyTopCollection} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCollection;