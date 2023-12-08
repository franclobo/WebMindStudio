// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ReactLogo from "../assets/icons/react_logo.png";
import PSQL from "../assets/icons/psql.png";
import Ruby from "../assets/icons/Ruby.png";
import Rails from "../assets/icons/rails.png";
import Vite from "../assets/icons/Vite.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import {
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

export const IconCarousel = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={ReactLogo} alt="React" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Vite} alt="Vite" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={PSQL} alt="PostgreSQL" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ruby} alt="Ruby" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Rails} alt="Rails" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
