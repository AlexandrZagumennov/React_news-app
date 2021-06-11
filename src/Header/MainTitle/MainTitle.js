import React from 'react';
import './MainTitle.scss';
import {NavLink} from 'react-router-dom';

const MainTitle = props => {
    return (
        <div className="main-title">
            <NavLink exact to = "/">{props.MainTitle}</NavLink>
        </div>
    )
};

export default MainTitle;