import React from 'react';
import {NavLink} from 'react-router-dom';
import OverviewTitle from './OverviewTitle/OverviewTitle';
import './Overview.scss';
import NewsList from '../NewsList/NewsList';

const Overview = props => {
    return (
        <div className="overview">
            <OverviewTitle 
                OverviewTitleTopLine = {'Всегда '}
                OverviewTitleLowLine = {'свежие '}
                OverviewTitleLowLineSpan = {'новости'}
            />
            <div className="news-short-list-wrapper">
                <NewsList 
                    countOfNews = {6}
                    finalFetchData = {props.finalFetchData}
                />
            </div>   
            <NavLink exact to = "/news" className="follow-news">Быть в курсе событий</NavLink>
        </div>
    )
};

export default Overview;