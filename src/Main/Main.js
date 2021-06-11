import React, { useEffect, useState } from 'react';
import './Main.scss';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Overview from '../Overview/Overview';
import News from '../News/News';
import Contacts from '../Contacts/Contacts';
import NewsDetail from '../NewsDetail/NewsDetail';

const useFetch = () => {
    const [data, updateData] = useState(null);
    const requestUrl = 'https://newsapi.org/v2/everything?q=Apple&from=2021-05-25&sortBy=popularity&apiKey=c22b3bf2212449c5a54adc9c8202834b';
    useEffect(()=> {
        const fetchData = async () => {
            const response = await axios.get(requestUrl);
            updateData(response.data)
        }
        fetchData();
    },[]);
    return data;
};

const Main = () => {
    const fetchData = useFetch();
    const prepareFinalFetchData = () => {
        let list;
        fetchData && fetchData.articles ? list = fetchData.articles : list = [];
        return list
    }
    const finalFetchData = prepareFinalFetchData();
    return (
        <div className="main">
            <Route 
                path = "/"
                exact
                render = {() => 
                    <Overview 
                        finalFetchData = {finalFetchData}
                    />
                }
            />
            <Route 
                path = "/news"
                exact
                render = {() => 
                    <News 
                        finalFetchData = {finalFetchData}
                    />
                }
            />
            <Route 
                path = "/contacts"
                exact
                component = {Contacts}
            />
            <Route 
                path = "/news/:name"
                exact
                component = {NewsDetail}
            />
        </div>
    )
};

export default Main;