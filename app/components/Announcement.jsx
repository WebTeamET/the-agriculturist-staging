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
    <div
      className={`flex items-center justify-between py-8 px-75 bg-green mdscreen2:grid mdscreen2:grid-cols-3`}
    >
      {isMobile ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
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
                <PrismicNextImage
                  className="w-full max-w-[10px]"
                  alt="image"
                  field={item.icon}
                />
                <PrismicNextLink
                  className="text-white text-body xsscreen2:text-12  font-body"
                  field={item.link}
                />
                <PrismicNextImage
                  className="w-full max-w-[16px] xsscreen2:max-w-[10px]"
                  alt="image"
                  field={item.icon_2}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        data.items.map((item, index) => {
          const justifyClass =
            index === 1
              ? "justify-center text-16"
              : index === 2
                ? "justify-end text-14"
                : "text-14";
          return (
            <div
              key={index}
              className={`flex items-center gap-2 custom-class-${index} ${justifyClass}`}
            >
              <PrismicNextImage
                alt="image"
                className={`w-full cursor-pointer ${index === 0 ? "max-w-[15px] mt-2" : "max-w-[16px]"}`}
                field={item.icon}
              />
              <PrismicNextLink
                className="text-white font-body tracking-[0.5px]"
                field={item.link}
              />
              <PrismicNextImage
                className={`w-full cursor-pointer ${index === 0 ? "max-w-[15px] mt-2" : "max-w-[16px]"}`}
                alt="image"
                field={item.icon_2}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Announcement;
