import bannerAchievements from "../../../Assets/Material/Banner_Achiev.webp";
import bannerAchievement2 from "../../../Assets/Achievements/banner2.png";
import bannerAchievement3 from "../../../Assets/Achievements/FIRA_2019.jpeg"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import AwardSlide from "../components/AwardSlide";

const Slider = () => {
  const customStyles = `
    .swiper-button-next, .swiper-button-prev {
      color: white;
      transition: transform 0.3s;
    }

    .swiper-button-next:hover, .swiper-button-prev:hover {
      transform: scale(1.1);
    }

    .swiper-pagination-bullet {
      width: 25px;
      height: 25px;
    }

    .swiper-pagination-bullet-active {
      background-color: white;
      width: 25px;
      height: 25px;
    }
  `;

  return (
    <>
      <div className="mb-20 md:mb-40 relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          initialSlide={0}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
        >
          <SwiperSlide>
            <AwardSlide
              image={`url(${bannerAchievements})`}
              name={"OUR Achievements"}
              desc={
                "Institut Teknologi Sepuluh Nopember (ITS) continues to show its achievement in the field of robotics by once again claiming the title of Overall Champion at the Indonesian Robot Contest (KRI) 2022. Announced directly at the ITS Robotics Center building which is ITS becoming the host for KRI 2022, on Sunday evening, July 3rd, ITS robotics team successfully secured championships in five categories in the KRI 2022."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <AwardSlide
              image={`url(${bannerAchievement2})`}
              name={"Kontes Robot Indonesia"}
              desc={
                "The Indonesian Robot Contest (KRI) is an annual student competition activity in the field of robotics design and engineering that can be participated in by all students at tertiary institutions in the territory of the Republic of Indonesia, from various ministries/agencies or official offices, which are recorded in the Higher Education Database. KRI is organized by Puspresnas  Ministry of Education, Culture, Research and Technology (Kemendikbudristek) of the Republic of Indonesia."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <AwardSlide
              image={`url(${bannerAchievement3})`}
              name={"FIRA"}
              desc={
                "The Federation of International Sports Association (FIRA) offers a challenging arena to the young generation and researchers working with autonomous mobile robotic systems. It is hoped that FIRA’s flagship event, called the FIRA Robot World Cup (or the FIRA Cup in short), which started in 1996, together with many other FIRA events, will help generate interests in robotics in the young minds. "
              }
            />
          </SwiperSlide>
          <style>{customStyles}</style>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
