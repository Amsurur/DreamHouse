import React from "react";
// import "../../pages/Home/style.css"
import "./style.css";
const Card = ({ img, p1, p2 }) => {
  return (
    <div className="card shadow-2xl dark:shadow-gray-300 hover:rounded-3xl dark:text-white dark:hover:shadow-blue-400   hover:shadow-2xl hover:shadow-blue-400 ">
      <div>
        <img className="w-[100%]" src={img} alt="" />
      </div>
      <div className="p-10 lg:text-start text-center ">
        <p className="text-[#056088] font-bold text-xl">{p1}</p>
        <p className="my-5">{p2}</p>
        <button className="btn1 py-5 px-7 text-white">See process</button>
      </div>
    </div>
  );
};

export default Card;
