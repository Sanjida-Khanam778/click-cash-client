import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Feedback from './Feedback';
import BestWorkers from './BestWorkers';
import Aos from 'aos';
import FAQ from './FAQ';

const Home = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000, // Animation duration in ms
          once: true, // Whether animation should happen only once
          mirror: true,
          once: true
        });
      }, []);
    return (
        <div>
            <Helmet>
                <title>Home | Click Cash</title>
            </Helmet>
            <Banner></Banner>
            <BestWorkers></BestWorkers>
            <Feedback></Feedback>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;