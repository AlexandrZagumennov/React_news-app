import React from 'react';
import NewsItem from '../NewsItem/NewsItem';
import './NewsList.scss';

const NewsList = props => {
    const finalFetchData = props.finalFetchData;
    let customNewsList;
    const createNewsList = () => {
        customNewsList = finalFetchData.filter((item, index) => {
            return index < props.countOfNews
        })
        return customNewsList;
    };
    createNewsList(finalFetchData);
    return (
        <div>
            <ul className="news-list-wrapper">
                {
                     customNewsList.map((item, index) => {
                        return (
                            <div className="news-item-wrapper">
                                <NewsItem 
                                    key = {index}
                                    incomingArcticlesParameters = {item}
                                    title = {item.title}
                                    source = {item.source}
                                    url = {item.url}
                                    publishedAt = {item.publishedAt}
                                />
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default NewsList;