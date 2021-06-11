import React from 'react';
import './NewsDetail.scss';
import getDateOfPublished from '../Utils/Utils';

const NewsDetail = props => {
    const dateOfPublishedObj= getDateOfPublished(props.location.state.publishedAt);
    return (
        <div className = "news-detail">
            <div className="news-detail-info">
                <h1 className="news-detail-title">{props.location.state.title}</h1>
                <p className="news-detail-source">{props.location.state.source.name}</p>
                <div className="date-of-publised">
                     {dateOfPublishedObj.day}<span> / {dateOfPublishedObj.mounth}</span> 
                </div>
            </div>
            <div className="news-detail-content">
                <img src={props.location.state.urlToImage} className="news-detail-content-image"/>
                <div className="news-detail-content-description">
                    {props.location.state.content}
                </div>    
            </div>
        </div>
    )
};

export default NewsDetail;
