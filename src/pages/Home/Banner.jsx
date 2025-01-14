import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import bgimg1 from "../assets/images/slider1.jpg";
import bgimg2 from "../assets/images/slider2.jpeg";
import bgimg3 from "../assets/images/slider3.jpg";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Slide from './Slide';

const Banner = () => {
    return (
        <div className='-z-10 relative'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text="ElectroCare: Your Gadget's Best Friend"
            subtitle={'Expert Repairs for Phones, Laptops, and Gadgets—Fast, Reliable, Affordable'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text="Revive Your Devices with ElectroCare"
            subtitle={'From Diagnostics to Repairs, We Bring Your Electronics Back to Life'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text="Seamless Solutions for All Your Electronics"
            subtitle={'Trust ElectroCare for Professional Repairs and Outstanding Service'}
          />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;