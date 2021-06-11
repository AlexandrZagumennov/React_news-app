import React from 'react';
import NewsList from '../NewsList/NewsList';
import NewsTitle from './NewsTitle/NewsTitle';

const News = props => {
    return (
        <div>
            <NewsTitle 
                NewsTitleTopLine = {'Быть '}
                NewsTitleLowLine = {'в курсе '}
                NewsTitleLowLineSpan = {'событий'}
            />
            <NewsList 
                countOfNews = {18}
                finalFetchData = {props.finalFetchData}
            />
        </div>
    )
};

export default News;