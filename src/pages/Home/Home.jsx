import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Feedback from './Feedback';
import BestWorkers from './BestWorkers';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Click Cash</title>
            </Helmet>
            <Banner></Banner>
            <BestWorkers></BestWorkers>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;