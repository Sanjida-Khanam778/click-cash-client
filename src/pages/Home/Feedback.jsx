import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import feed1 from "../../assets/feed1.jpg";
import feed2 from "../../assets/feed2.webp";
import feed3 from "../../assets/feed3.jpg";
import feed4 from "../../assets/feed4.jpg";
import feed5 from "../../assets/feed5.jpeg";
import feed6 from "../../assets/feed6.jpg";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const FeedbackSlider = () => {
  const feedbacks = [
    {
      name: "John Doe",
      photo: feed1,
      quote:
        "This platform is amazing! It has completely changed the way I work and earn.",
    },
    {
      name: "John Doe",
      photo: feed2,
      quote:
        "This platform is amazing! It has completely changed the way I work and earn.",
    },
    {
      name: "John Doe",
      photo: feed3,
      quote:
        "This platform is amazing! It has completely changed the way I work and earn.",
    },
    {
      name: "John Doe",
      photo: feed4,
      quote:
        "This platform is amazing! It has completely changed the way I work and earn.",
    },
    {
      name: "Jane Smith",
      photo: feed5,
      quote:
        "I love how easy it is to use and how quickly I can start earning money.",
    },
    {
      name: "Robert Johnson",
      photo: feed6,
      quote:
        "The best part is how supportive the community is. Highly recommended!",
    },
  ];

  return (
    <div className="my-10 p-5 mx-auto w-11/12">
      <h2 className="text-center text-2xl font-bold mb-6">
        What Our Users Say
      </h2>
      <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        }}
        // slidesPerView={4}
        // spaceBetween={20}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {feedbacks.map((feedback, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center p-5 shadow-lg rounded-lg bg-gray-50">
              <img
                src={feedback.photo}
                alt={feedback.name}
                className="rounded-full w-24 h-24 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{feedback.name}</h3>
              <p className="text-gray-600 mt-3">{feedback.quote}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedbackSlider;
