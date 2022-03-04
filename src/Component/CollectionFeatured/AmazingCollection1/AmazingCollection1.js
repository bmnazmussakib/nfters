import React from 'react';
import './AmazingCollection1.css';

import amazingBig1 from '../../../images/amazing-collection-1/amazing1 (1).png';
import amazing1_2 from '../../../images/amazing-collection-1/amazing1 (2).png';
import amazing1_3 from '../../../images/amazing-collection-1/amazing1 (3).png';
import amazing1_4 from '../../../images/amazing-collection-1/amazing1 (4).png';

import avatar from '../../../images/small avatar1.png';

const AmazingCollection1 = () => {


    return (
        <div className="amazing1">
            <div class="parent mb-3">
                <div class="one"><img src={amazingBig1} alt="" className="img-fluid"/></div>
                <div class="two"><img src={amazing1_2} alt="" className="img-fluid"/></div>
                <div class="three"><img src={amazing1_3} alt="" className="img-fluid"/></div>
                <div class="four"><img src={amazing1_4} alt="" className="img-fluid"/></div>
            </div>

            <div className="row d-flex align-items-end">
                <div className="col-lg-7 col-md-7 col-7">
                    <h5>Amazing Collection</h5>
                    <div className="avatar">
                        <img src={avatar} alt="" className="img-fluid me-3"/>
                        <span>by Arkhan</span>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-5">
                    <p className="btn items">Total 54 Items </p>
                </div>
            </div>

        </div>
    );
};

export default AmazingCollection1;