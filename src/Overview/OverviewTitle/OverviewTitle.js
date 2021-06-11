import React from 'react';
import './OverviewTitle.scss';

const OverviewTitle = props => {
    return (
        <div className="overview-title">
            {props.OverviewTitleTopLine}<br/> 
            {props.OverviewTitleLowLine} 
            <span>{props.OverviewTitleLowLineSpan}</span> 
        </div>
    )
};

export default OverviewTitle;