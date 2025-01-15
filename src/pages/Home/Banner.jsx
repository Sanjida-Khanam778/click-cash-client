import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import bgimg1 from "../../assets/smart.webp";
import bgimg2 from "../../assets/smart.webp";
import bgimg3 from "../../assets/smart.webp";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from "./Slide";

const Banner = () => {
  return (
    <div className="relative">
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
            text="Empower Your Earnings"
            subtitle={
              "Complete Tasks, Earn Money – Simple & Fast!"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text="Your Microtasks, Your Income"
            subtitle={
              "Turn Small Efforts into Big Rewards!"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text="Earn More, Work Less"
            subtitle={
              "Flexible Earning Opportunities for Everyone!"
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
