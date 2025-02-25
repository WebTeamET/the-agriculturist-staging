'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const ProductSlider = () => {
  const images = [
    "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg",
    "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg",
    "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg",
    "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg",
    
  ]; 

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination]}
        pagination={{ el: ".custom-pagination",clickable: true }}
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        className="rounded-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto rounded-lg"
              layout="responsive" 
              width={500}
              height={500}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      
      <div className="custom-pagination flex justify-center mt-4"></div>

    </div>
  );
};

export default ProductSlider;

