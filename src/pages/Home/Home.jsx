import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Feedback from './Feedback';
import BestWorkers from './BestWorkers';
import Aos from 'aos';
import FAQ from './FAQ';
import Contact from './Contact';
import About from './About';
import Newslatter from '../../components/Newsletter/Newsletter';
import Patners from '../../components/Patners/Patners';

const Home = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000, 
          mirror: true,
          once: true
        });
      }, []);
    return (
        <div className='w-full overflow-hidden'>
            <Helmet>
                <title>Home | Click Cash</title>
            </Helmet>
            <Banner></Banner>
            <BestWorkers></BestWorkers>
            <Feedback></Feedback>
            <About></About>
            <Newslatter></Newslatter>
            <Patners></Patners>
            <Contact></Contact>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;