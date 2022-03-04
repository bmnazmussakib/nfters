import React from 'react';
import './WeeklyTopCollection.css';
import { FaEthereum } from "react-icons/fa";


const WeeklyTopCollection = (props) => {
    const { title, img, bid, percentage, verified, key } = props.weeklyTopCollection;

    return (
        <div className="weeklyTopCollection">
            <div className="weekly-card mb-4 d-flex justify-content-evenly">
                <div className="">
                    <img src={img} className="img-fluid" alt="..." />
                </div>
                <div className="">
                    <h5 className="weekly-card-title">{title}</h5>
                    <span className="weekly-bid"><FaEthereum className="fs-3 text-black" /> {bid}</span>
                </div>

                <div className="d-flex align-content-center flex-wrap">
                    <span className="percentage"> +{percentage}% </span>
                </div>
            </div>
        </div>

    );
};

export default WeeklyTopCollection;