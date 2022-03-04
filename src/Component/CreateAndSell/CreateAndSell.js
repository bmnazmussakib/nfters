import React from 'react';
import './CreateAndSell.css';
import './CreateAndSell.media.css';
import bg1 from '../../images/create-and-sell/create-sell (1).png';
import bg2 from '../../images/create-and-sell/create-sell (2).png';
import bg3 from '../../images/create-and-sell/create-sell (3).png';
import avatar1 from '../../images/create-and-sell/create-sell-avatar (1).png';
import avatar2 from '../../images/create-and-sell/create-sell-avatar (2).png';
import avatar3 from '../../images/create-and-sell/create-sell-avatar (2).png';

const CreateAndSell = () => {
    return (
        <section className="CreateAndSell">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="createAndSell-img d-flex align-items-center">
                            <div className="createAndSell-img-1">
                                <div className="img1">
                                    <img src={bg1} alt="" className="img-fluid bg1" />
                                    <img src={avatar1} alt="" className="img-fluid avatar1" />
                                </div>

                                <div className="img2">
                                    <img src={bg2} alt="" className="img-fluid bg2" />
                                    <img src={avatar2} alt="" className="img-fluid avatar2" />
                                </div>
                            </div>

                            <div className="createAndSell-img-2 ">
                                <div className="img3">
                                    <img src={bg3} alt="" className="img-fluid bg3" />
                                    <img src={avatar3} alt="" className="img-fluid avatar3" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="createAndSell-text">
                            <h2>Create and <br /> sell your NFTs</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
                            <div className="explore-now sign-up">
                                <button className="btn">Sign Up Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateAndSell;