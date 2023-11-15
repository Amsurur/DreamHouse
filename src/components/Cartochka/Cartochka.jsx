import React from "react";
import "../Card/style.css";
const Cartochka = ({ img, p1, p2 }) => {
  return (
    <div>
      <div className="card text-center grid p-10">
        <img className="inline mx-auto" src={img} alt="" />
        <p className="text-xl mb-5">{p1}</p>
        <p>{p2}</p>
      </div>
    </div>
  );
};

export default Cartochka;
