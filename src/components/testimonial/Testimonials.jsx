"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    text: "Implementing AI assistants has revolutionized our operations. This course was the catalyst for our transformation.",
    name: "Alex Thompson",
    title: "CEO of Innovate Corp.",
    img: "/Amelia.jpg",
  },
  {
    text: "An absolute game-changer! The insights and practical applications shared are truly invaluable and have opened up new possibilities.",
    name: "Maria Rodriguez",
    title: "Small Business Owner",
    img: "/Amelia.jpg",
  },
  {
    text: "A game-changer! The insights and practical applications provided are invaluable.",
    name: "Alexandra Swift",
    title: "Game Designer",
    img: "/Amelia.jpg",
  },
  {
    text: "Amazing experience — so helpful and practical!",
    name: "John Carter",
    title: "Developer",
    img: "/Amelia.jpg",
  },
  {
    text: "Incredible insights and real-world examples!",
    name: "Sophia Green",
    title: "Designer",
    img: "/Amelia.jpg",
  },
];

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [indicatorPosition, setIndicatorPosition] = useState(0);

  const handleSlideChange = (swiper) => {
    const totalSlides = swiper.slides.length;
    const slidesPerView = swiper.params.slidesPerView;
    const pages = totalSlides - slidesPerView + 0.5;

    const active = swiper.activeIndex;
    const step = 100 / pages;
    setIndicatorPosition(active * step);
  };

  return (
    <div className="w-full text-white py-20">
      <div>
        <h2 className="text-center text-4xl font-semibold mb-3">
          Hear from Our
        </h2>
        <h3 className="text-center text-5xl font-bold text-[#9b83f5] mb-12">
          Success Stories
        </h3>

        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={30}
          navigation={false}
          pagination={false}
          onSlideChange={handleSlideChange}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
          className="mySwiper mt-10"
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="bg-gradient-to-t from-white to-[#e7e9ff]/85 px-8 py-12 rounded-3xl max-sm:mx-2 h-full shadow-md hover:shadow-lg transition
"
              >
                <p className="text-2xl mb-6 text-[#0f0124]/80">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex gap-3">
                    <h4 className="font-semibold text-[#0f0124]">
                      {item.name}
                    </h4>
                    <p className="text-sm text-[#0f0124]/60">{item.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="flex items-center justify-center w-10 h-10 hover:opacity-100 opacity-60 transition-opacity"
          >
            <svg
              className="w-8 h-8 text-[#9b83f5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="relative w-40 h-1 bg-[#9b83f5]/50 rounded-full overflow-hidden">
            <div
              className="absolute top-0 h-full w-1/5 bg-[#9b83f5] rounded-full transition-all duration-500 ease-in-out"
              style={{
                left: `${indicatorPosition}%`,
                boxShadow: "0 0 20px #9b83f5, 0 0 20px #9b83f5",
              }}
            ></div>
          </div>

          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="flex items-center justify-center w-10 h-10 hover:opacity-100 opacity-60 transition-opacity"
          >
            <svg
              className="w-8 h-8 text-[#9b83f5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
