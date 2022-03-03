import React from 'react';
import Hero from '../Hero/Hero';
import TopMenu from '../TopMenu/TopMenu';
import './Header.css';
import './Header.media.css';

const Header = () => {
    return (
        <div>
            <TopMenu />
            <Hero />
        </div>
    );
};

export default Header;