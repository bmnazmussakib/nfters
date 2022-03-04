import React from 'react';
import './CollectionFeatured.css';
import './CollectionFeatured.media.css';


import amazingBig1 from '../../../images/amazing-collection-1/amazing1 (1).png';
import amazing1_2 from '../../../images/amazing-collection-1/amazing1 (2).png';
import amazing1_3 from '../../../images/amazing-collection-1/amazing1 (3).png';
import amazing1_4 from '../../../images/amazing-collection-1/amazing1 (4).png';

import amazingBig2 from '../../../images/amazing-collection-2/amazing2 (1).png';
import amazing2_2 from '../../../images/amazing-collection-2/amazing2 (2).png';
import amazing2_3 from '../../../images/amazing-collection-2/amazing2 (3).png';
import amazing2_4 from '../../../images/amazing-collection-2/amazing2 (4).png';

import amazingBig3 from '../../../images/amazing-collection-3/amazing3 (1).png';
import amazing3_2 from '../../../images/amazing-collection-3/amazing3 (3).png';
import amazing3_3 from '../../../images/amazing-collection-3/amazing3 (3).png';
import amazing3_4 from '../../../images/amazing-collection-3/amazing3 (4).png';
import AmazingCollection1 from '../AmazingCollection1/AmazingCollection1';

const CollectionFeatured = () => {

    const amazingCollection1 = [
        {
            img1: amazingBig1,
            img2: amazing1_2,
            img3: amazing1_3,
            img4: amazing1_4,
        }
    ];

    const amazingCollection2 = [
        {
            img1: amazingBig2,
            img2: amazing2_2,
            img3: amazing2_3,
            img4: amazing2_4,
        }
    ];

    const amazingCollection3 = [
        {
            img1: amazingBig3,
            img2: amazing3_2,
            img3: amazing3_3,
            img4: amazing3_4,
        }
    ];




    return (
        <div className="collection-featured">
            <div className="container">
                <div className="collection-featured-container">
                    {
                        amazingCollection1.map(amazing1 => <AmazingCollection1 amazing1={ amazing1 }/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CollectionFeatured;