"use client";

import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import React, { useState, useEffect } from "react";

const Announcement = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 990);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!data) return null;
  if (data.hide_module) return null;
  return (
    <div className={`flex items-center justify-between py-8 px-75 bg-green`}>
      {isMobile ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {data.items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center gap-2 justify-center">
                <PrismicNextImage className="w-full max-w-[10px]" alt="image" field={item.icon} />
                <PrismicNextLink field={item.link} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        data.items.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <PrismicNextImage alt="image" className="w-full max-w-[10px]" field={item.icon} />
            <PrismicNextLink field={item.link} />
          </div>
        ))
      )}
    </div>
  );
};

export default Announcement;
