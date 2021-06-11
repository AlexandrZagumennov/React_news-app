import React from 'react';
import './FooterTitleWrapper.scss';
import FooterTitle from '../FooterTitle/FooterTitle';
import FooterSubtitle from '../FooterSubtitle/FooterSubtitle';

const FooterTitleWrapper = () => {
    return (
        <div className="footer-title-wrapper">
            <FooterTitle 
                FooterTitle = {'Новостник'}
            />
            <FooterSubtitle 
                FooterSubtitle = {'Single Page Application'}
            />
        </div>
    )
};

export default FooterTitleWrapper;