import React from 'react';
import './AmazingCollection3.css';




import amazingBig3 from '../../../images/amazing-collection-3/amazing3 (1).png';
import amazing3_2 from '../../../images/amazing-collection-3/amazing3 (3).png';
import amazing3_3 from '../../../images/amazing-collection-3/amazing3 (3).png';
import amazing3_4 from '../../../images/amazing-collection-3/amazing3 (4).png';

import avatar from '../../../images/small avatar1.png';



const AmazingCollection3 = () => {
    return (
        <div className="amazing2">
            <div class="parent mb-3">
                <div class="one"><img src={amazingBig3} alt=""  className="img-fluid"/></div>
                <div class="two"><img src={amazing3_2} alt=""  className="img-fluid"/></div>
                <div class="three"><img src={amazing3_3} alt=""  className="img-fluid"/></div>
                <div class="four"><img src={amazing3_4} alt=""  className="img-fluid"/></div>
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

export default AmazingCollection3;