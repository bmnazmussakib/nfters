import React from 'react';
import './CollectionFeatured.css';
import './CollectionFeatured.media.css';
import AmazingCollection1 from '../AmazingCollection1/AmazingCollection1';
import AmazingCollection2 from '../AmazingCollection2/AmazingCollection2';
import AmazingCollection3 from '../AmazingCollection3/AmazingCollection3';


const CollectionFeatured = () => {





    return (
        <div className="collection-featured">
            <div className="container">
                <h2 className="collection-title mb-5">Collection Featured NFTs</h2>
                <div className="collection-featured-container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-4 col-md-4"><AmazingCollection1 /></div>
                        <div className="col-lg-4 col-md-4"><AmazingCollection2 /></div>
                        <div className="col-lg-4 col-md-4"><AmazingCollection3 /></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CollectionFeatured;