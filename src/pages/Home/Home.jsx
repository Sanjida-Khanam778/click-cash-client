import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Click Cash</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;