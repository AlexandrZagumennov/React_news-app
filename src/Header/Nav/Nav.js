import React from 'react';
import './Nav.scss';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav-wrapper">
            <nav>
                <ul className="header-nav">
                    <li><NavLink exact to = "/" activeClassName = {'active'}>Главная</NavLink></li>
                    <li><NavLink exact to = "/news">Новости</NavLink></li>
                    <li><NavLink exact to = "/contacts">Контакты</NavLink></li>
                </ul>
            </nav>
        </div>
    )
};

export default Nav;