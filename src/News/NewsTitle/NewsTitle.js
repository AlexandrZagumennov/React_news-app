import React from 'react';
import './NewsTitle.scss';

const NewsTitle = props => {
    return (
        <div className="news-title">
            {props.NewsTitleTopLine}<br/> 
            {props.NewsTitleLowLine} 
            <span>{props.NewsTitleLowLineSpan}</span> 
        </div>
    )
};

export default NewsTitle;