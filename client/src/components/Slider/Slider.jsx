import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";
import banner5 from "../../assets/images/banner5.jpg";
import banner6 from "../../assets/images/banner6.jpg";
import banner7 from "../../assets/images/banner7.jpg";
import banner8 from "../../assets/images/banner8.jpg";

const Slider = () => {
  const images = [banner1, banner2, banner3, banner4, banner5, banner6, banner7, banner8];
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        {images.map((d, i) => (
          <SwiperSlide key={i}>
            <img
              src={d}
              alt="bannerImage"
              style={{ height: "750px", width: "100%" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
