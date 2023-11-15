import React from "react";
import details from "../../assets/details.svg";
import viseo from "../../assets/VideoDetails.svg";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../assets/img (1).svg";
import img2 from "../../assets/img (2).svg";
import img3 from "../../assets/img (3).svg";
import img4 from "../../assets/img (4).svg";
import img5 from "../../assets/img (5).svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Details = () => {
  return (
    <div>
      <div className="sec1Bg md:p-24 py-24 px-10 text-center">
        <h1 className="text-5xl font-bold mt-40 mb-10 text-white">
          Process details : Build villa two floors
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 items-center my-20 w-[90%] mx-auto">
        <div className="lg:text-start text-center mb-20 lg:mb-0">
          <p className="text-[#056088] font-bold text-xl">Villa De Borusdz</p>
          <p className="my-5 lg:w-[70%]">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </p>
          <span className="text-[#056088] font-bold text-xl">
            Budget : $90.000
          </span>
          <span className="text-[#056088] font-bold text-xl mr-5">
            Time : 3 months
          </span>
        </div>
        <div>
          <img src={details} alt="" />
        </div>
      </div>
      {/* 3 */}
      <div className="relative">
        <div className=" absolute lg:left-40 md:bottom-[870px] bottom-[500px] ">
          <div className="text-center mx-auto ">
            <img className="inline" src={viseo} alt="" />
          </div>
        </div>
        <div className="news w-[100%] lg:p-[300px] sm:p-[250px] xs:p-[200px] p-[150px] text-center text-3xl  mt-[200px] md:mt-[400px] lg:mt-[500px] mb-[100px]">
          <p className="text-white font-bold">Gallery</p>
        </div>
        <div className="mb-40 w-[90%] mx-auto">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              668: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="" src={img} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mb-10" src={img4} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Details;
