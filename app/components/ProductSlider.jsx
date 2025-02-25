"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { useState } from "react";
import Icon from "./Icon";

const ProductSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState({});

  const toggleVideoPlayState = (index, event) => {
    event.stopPropagation();
    setIsPlaying((prevState) => ({ ...prevState, [index]: !prevState[index] }));
  };

  const resetVideoPlayState = (index) => {
    setIsPlaying((prevState) => ({ ...prevState, [index]: false }));
  };

  const slides = [
    {
      type: "image",
      url: "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg",
    },
    {
      type: "image",
      url: "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg",
    },
    {
      type: "image",
      url: "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg",
    },
    {
      type: "image",
      url: "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg",
    },
    {
      type: "image",
      url: "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg",
    },
    {
      type: "video",
      url: "https://the-agriculturist-staging.cdn.prismic.io/the-agriculturist-staging/Z7hh6J7c43Q3gDxm_1988560-uhd_3840_2160_24fps.mp4",
    },
  ];

  const handleSlideChange = (swiper) => {
    const currentSlide = swiper.slides[swiper.activeIndex];
    const videoElement = currentSlide.querySelector("video");

    if (videoElement) {
      videoElement.currentTime = 0;
      isPlaying[swiper.activeIndex]
        ? videoElement.play()
        : videoElement.pause();
      swiper.params.autoplay = { delay: videoElement.duration * 1000 };
    } else {
      swiper.params.autoplay = { delay: 5000 };
    }

    setActiveIndex(swiper.activeIndex);
    setIsPlaying((prevState) => ({
      ...prevState,
      [swiper.previousIndex]: false,
    }));
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination]}
        pagination={{ el: ".custom-pagination", clickable: true }}
        loop
        spaceBetween={10}
        slidesPerView={1}
        className="rounded-lg"
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.type === "image" ? (
              <Image
                src={slide.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto rounded-lg"
                layout="responsive"
                width={500}
                height={500}
              />
            ) : (
              <div
                className="relative z-10 w-full h-full"
                onClick={() => resetVideoPlayState(index)}
              >
                {!isPlaying[index] ? (
                  <div className="inset-0">
                    <Image
                      src="https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg"
                      alt="Video thumbnail"
                      layout="responsive"
                      width={500}
                      height={500}
                    />
                    <div className="absolute z-10 inset-0 flex items-center justify-center">
                      <div
                        className="cursor-pointer flex items-center justify-center"
                        onClick={(e) => toggleVideoPlayState(index, e)}
                      >
                        <Icon type="videoPlay" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <video
                    autoPlay
                    muted={false}
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={slide.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination flex justify-center mt-4"></div>
    </div>
  );
};

export default ProductSlider;
