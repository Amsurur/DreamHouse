import React from "react";
import "./style.css";
import sec2 from "../../assets/about.svg";
import sec2_1 from "../../assets/about2.svg";
import sec3 from "../../assets/sec3.svg";
const About = () => {
  return (
    <div>
      <div className="sec1Bg p-24 text-center">
        <h1 className="text-5xl font-bold mt-40 text-white">
          About our story - We are <br /> the best team
        </h1>
      </div>
      {/* 2 */}
      <div className="grid dark:text-white lg:grid-cols-2 w-[90%] items-center gap-10 mt-20 pb-10 mx-auto">
        <div className="relative pb-10">
          <img src={sec2} alt="" />
          <img className="absolute top-72 right-0" src={sec2_1} alt="" />
        </div>
        <div className="lg:w-[65%] w-[80%] lg:mx-0 mx-auto mr-auto ">
          <p className="text-[#056088] font-bold text-xl">
            Here were the story begins
          </p>
          <p className="leading-7 mt-5 mb-7">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </p>
          <p className="leading-7">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </p>
        </div>
      </div>
      {/* 3 */}
      <div className="sec3Bg dark:text-white grid lg:grid-cols-2 mb-20 gap-10 items-center p-5">
        <div className="md:w-[70%] mx-auto">
          <p className="text-lg font-bold mb-5 text-white">
            We love to make perfect <span className="text-2xl">home</span>
          </p>
          <p className=" text-white leading-7">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </p>
        </div>
        <div className="text-center">
          <img className="inline" src={sec3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
