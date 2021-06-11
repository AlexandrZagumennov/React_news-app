import React from 'react';
import './Header.scss';
import MainTitle from './MainTitle/MainTitle';
import Nav from './Nav/Nav';

const Header = () => {
    return (
        <div className="header">
            <MainTitle 
                MainTitle = {'Новостник'}
            />
            <Nav />
        </div>
    )
};

export default Header;
