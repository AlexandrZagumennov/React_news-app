import React from 'react';
import {withRouter} from 'react-router-dom';
import './NewsItem.scss';
import getDateOfPublished from '../Utils/Utils';

const NewsItem = props => {
    const dateOfPublishedObj= getDateOfPublished(props.publishedAt);
    return (
        <div>
            <div className="news-item">
                <div className="li-wrapper">
                    <li 
                        onClick={()=>
                            props.history.push(
                            { pathname:'/News/' + props.title, state: props.incomingArcticlesParameters})}
                    >
                    {props.title} 
                    </li>
                </div>
                <div className="middle-wrapper"></div>
                <div className="bottom-news-item">
                    <div className="source-url">
                        <a href={props.url} target="blank" >{props.source.name}</a>
                    </div>
                    <div className="date-of-publised">
                        {dateOfPublishedObj.day}<span> / {dateOfPublishedObj.mounth}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default withRouter(NewsItem);