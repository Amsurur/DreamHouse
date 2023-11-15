import React from "react";
import aboutSec from "../../assets/aboutSec.svg";
const Services = () => {
  return (
    <div>
      <div className="sec1Bg p-24 text-center">
        <h1 className="text-5xl font-bold mt-40 text-white">
          Need some consultation or want to <br /> collaborarion with us? Let’s
          connect!
        </h1>
      </div>
      {/* 2 */}
      <div className="grid lg:grid-cols-[1.2fr,2fr] text-center lg:text-start items-center bg-[#F5F5F5] w-[90%] mt-10 mx-auto">
        <div>
          <img className="inline mt-10 lg:mt-0 " src={aboutSec} alt="" />
        </div>
        <div className="p-10">
          <p className="text-[#056088] font-bold text-lg">
            Let’s talk about anything you need
          </p>
          <div className="grid grid-cols-2">
            <input
              type="text"
              className="outline-none border-2 pl-5 py-3"
              placeholder="Your name/company name"
            />
            <input
              className="outline-none ml-5 border-2 pl-5 py-3"
              type="text"
              placeholder="Phone/E-mail"
            />

            <input
              className="outline-none mt-5 border-2 pl-5 col-span-2 mb-5 pr-40 py-3 pb-40"
              type=""
              placeholder="Message"
            />
          </div>
          <button className="btn1 py-5 px-7 text-white">See more</button>
        </div>
      </div>
      {/* 3 */}
      <div className="text-center my-20">
        <p className="text-xl font-bold text-[#056088] mb-5">
          Or contact us via e-mails or even mobile call or Whatsapp messages
        </p>
        <button className="btn1 py-5 px-7 text-white">See more</button>

        <button className="btn1 py-5 mx-5 px-7 text-white">See more</button>

        <button className="btn1 py-5 px-7 text-white">See more</button>
      </div>
    </div>
  );
};

export default Services;
