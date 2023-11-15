import React from "react";
import pen from "../../assets/pen.svg";
import sofa from "../../assets/mdi_sofa.svg";
import building from "../../assets/bx_bxs-building-house.svg";
import kluch from "../../assets/ic_baseline-construction.svg";
import service from "../../assets/sercvice.svg";
import service2 from "../../assets/service2.svg";
import "./style.css";
const Contact = () => {
  return (
    <div>
      <div className="sec1Bg md:p-24 py-24 px-10 text-center">
        <h1 className="text-5xl font-bold mt-40 mb-10 text-white">
          Our team services
        </h1>
      </div>
      {/* 2 */}
      <div className="dark:text-white mt-20">
        <div className="text-center pb-10">
          <p className="text-[#056088] text-xl mb-5 font-bold">Our services</p>
          <p className="leading-6">
            Our services include building new <br /> buildings and renovating
            old buildings
          </p>
        </div>
        <div className="grid w-[90%] pb-20 mx-auto 2xl:gap-10 items-center lg:grid-cols-4 sm:grid-cols-2">
          <div className="p-10 card1  hover:rounded-3xl dark:text-white dark:hover:shadow-blue-400   hover:shadow-2xl hover:shadow-blue-400 ">
            <img className="mb-5" src={pen} alt="" />
            <p className="text-lg font-bold text-white">
              Design building/house
            </p>
            <p className="mt-5 text-white">
              We have an architect for design new buildings
            </p>
          </div>
          <div className="p-10 dark:border border-[#056088] hover:rounded-3xl dark:text-white dark:hover:shadow-blue-400   hover:shadow-2xl hover:shadow-blue-400 ">
            <img className="mb-5" src={sofa} alt="" />
            <p className="text-lg font-bold ">Design building/house</p>
            <p className="mt-5">
              We have an architect for design new buildings
            </p>
          </div>
          <div className="p-10 dark:border border-[#056088] hover:rounded-3xl dark:text-white dark:hover:shadow-blue-400   hover:shadow-2xl hover:shadow-blue-400">
            <img className="mb-5" src={building} alt="" />
            <p className="text-lg font-bold ">Design building/house</p>
            <p className="mt-5">
              We have an architect for design new buildings
            </p>
          </div>
          <div className="p-10 dark:border border-[#056088] hover:rounded-3xl dark:text-white dark:hover:shadow-blue-400   hover:shadow-2xl hover:shadow-blue-400">
            <img className="mb-5" src={kluch} alt="" />
            <p className="text-lg font-bold ">Design building/house</p>
            <p className="mt-5">
              We have an architect for design new buildings
            </p>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="ser1 w-[90%] mx-auto mt-10 lg:grid grid-cols-2 items-center text-white">
        <img src={service} className="" alt="" />
        <div className="xl:pr-20 lg:pr-10 w-[90%] lg:mx-0 mx-auto mt-10 lg:pb-0 pb-10 leading-7">
          <p className="font-bold text-xl">Design building / house</p>
          <p className="2xl:pr-52  mt-5">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </p>
        </div>
      </div>
      <div className="ser2 items-center my-32 w-[90%] mx-auto lg:pl-24  grid lg:grid-cols-2">
        <div className="text-white lg:mt-0 mt-10 text-center mx-auto w-[90%] lg:pl-14">
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </p>
        </div>
        <img
          src={service2}
          className="lg:justify-self-auto justify-self-end lg:mt-0 mt-14"
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
