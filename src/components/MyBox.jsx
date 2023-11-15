import React from "react";
import "../components/Card/style.css";
const MyBox = ({ img, text, text2, text3, img2 }) => {
  return (
    <div>
      <div className="card grid lg:grid-cols-[1fr,2fr,1fr] grid-cols-[1fr,1fr,0.5fr]  lg:gap-0 gap-5 items-center justify-between px-7 py-5">
        <div>
          <img className="xl:w-[80%] lg:w-[90%] " src={img} alt="" />
        </div>
        <div className="justify-self-start">
          <h1 className="mb-6 text-xl ">{text}</h1>
          <p className="mb-2 text-xs">{text2}</p>
          <p className="text-xs">{text3}</p>
        </div>
        <img
          className="border rounded-full p-1 self-end justify-end"
          src={img2}
          alt=""
        />
      </div>
    </div>
  );
};

export default MyBox;
