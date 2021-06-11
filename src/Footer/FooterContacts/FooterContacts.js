import React from 'react';
import './FooterContacts.scss';

const FooterContacts = props => {
    return (
        <div className="footer-contacts">
            <div className="made-by">{props.MadeBy}</div>
            <div className="developer">{props.Developer}</div>
        </div>
    )
};

export default FooterContacts;