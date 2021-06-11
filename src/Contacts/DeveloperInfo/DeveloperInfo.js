import React from 'react';
import './DeveloperInfo.scss';

const DeveloperInfo = props => {
    return (
        <div className="developer-info">
           <div className="developer-phone-number">{props.DeveloperPhoneNumber}</div>
           <div className="developer-name">{props.DeveloperName}</div>
           <div className="developer-email">{props.DeveloperEmail}</div>
           <div className="developer-position">{props.DeveloperPosition}</div>
           <div className="developer-stack">
               {props.DeveloperStack}
               <span>{props.DeveloperStackReact}</span>
            </div>
        </div>
    )
};

export default DeveloperInfo;