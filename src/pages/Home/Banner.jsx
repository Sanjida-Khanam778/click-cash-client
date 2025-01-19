import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import bgimg1 from "../../assets/slider1.jpg";
import bgimg2 from "../../assets/slider2.jpg";
import bgimg3 from "../../assets/slider3.jpg";
import bgimg4 from "../../assets/slider4.webp";
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
            text="Empower Your Free Time"
            subtitle={
              "Transform every moment into money. Start completing tasks today and enjoy instant rewards!"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text="Your Microtasks, Your Income"
            subtitle={
              "Your time is precious, and at Click Cash, we ensure you get the most out of it. Our platform is designed to help you earn real money from the comfort of your home or on the go."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text="Unlock the Power of Simplicity"
            subtitle={
              "Discover an easy way to make money online. Sign up now and take the first step toward financial freedom."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg4}
            text="Earn More, Worry Less"
            subtitle={
              "Turn your time into earnings! Join today and complete simple tasks to get paid instantly. Your journey to financial freedom starts here."
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
