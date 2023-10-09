import Division from "../components/Division";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const OurDivision = () => {
  return (
    <>
      <div className="container mt-16 md:mt-40 md:w-10/12">
        <img
          alt=""
          src={require("../../../Assets/Material/ICON 1.png")}
          className="absolute left-0 -z-20 hidden md:block animate-pulse"
        ></img>
        <img
          alt=""
          src={require("../../../Assets/Material/BG circle.png")}
          className="absolute right-0 -z-20 hidden md:block animate-pulse"
        ></img>
        <div className="text-white justify-center text-center">
          <h1 className="font-secondary font-bold md:text-5xl">OUR DIVISION</h1>
          <p className="font-primary md:text-lg max-w-2xl mx-12 md:mx-auto my-2 md:my-8">
            To improve the quality and skills of ITS Robotics members, we set up a division that is
            expected to gain comprehensive knowledge and be able to become qualified resources in
            the field of robotics, here are our division :
          </p>
        </div>
        <div className="text-center">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            initialSlide={0}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            spaceBetween={10}
            breakpoints={{
              300: {
                slidesPerView: 3,
              },
              520: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <Division name={"Executive Officer"} />
            </SwiperSlide>
            <SwiperSlide>
              <Division name={"Research and Technology"} />
            </SwiperSlide>
            <SwiperSlide>
              <Division name={"Human Research Development"} />
            </SwiperSlide>
            <SwiperSlide>
              <Division name={"Robotical Lesson"} />
            </SwiperSlide>
            <SwiperSlide>
              <Division name={"External Relations"} />
            </SwiperSlide>
            <SwiperSlide>
              <Division name={"Media and Information"} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OurDivision;
