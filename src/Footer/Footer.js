import React from 'react';
import './Footer.scss';
import FooterTitleWrapper from './FooterTitleWrapper/FooterTitleWrapper';
import FooterDescription from './FooterDescription/FooterDescription';
import FooterContacts from './FooterContacts/FooterContacts';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <NavLink exact to = "/"><FooterTitleWrapper /></NavLink>
            <FooterDescription 
                FooterDescription = {'Дипломный проект'}
            />
            <NavLink exact to = "/contacts">
                <FooterContacts
                    MadeBy = {'Made by'}
                    Developer = {'Александр Загумённов'}
                />
            </NavLink>
        </div>
    )
};

export default Footer;