import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Carosel.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function Carosel() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src="../../../Assets/images/Sports-car.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../Assets/images/ferrari-458-spider-2932191_1280.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../Assets/images/lamborghini-aventador-2932196_1280.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
