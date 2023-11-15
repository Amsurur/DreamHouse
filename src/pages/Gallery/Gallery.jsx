import React from "react";
import Card from "../../components/Card/Card.jsx";
import img0 from "../../assets/img(0).svg";
import img1 from "../../assets/img (1).svg";
import img2 from "../../assets/img (2).svg";
import img3 from "../../assets/img (3).svg";
import img4 from "../../assets/img (4).svg";
import img5 from "../../assets/img (5).svg";
const Gallery = () => {
  return (
    <div>
      <div className="sec1Bg md:p-24 py-24 px-10 text-center">
        <h1 className="text-5xl font-bold mt-40 mb-10 text-white">
          Here some our best works
        </h1>
      </div>
      <div className="grid dark:text-white lg:grid-cols-3 sm:grid-cols-2 gap-14 w-[90%] mx-auto mt-20">
        <Card img={img0} p1="Interior design" p2="3 Months work time"></Card>
        <Card img={img1} p1="Interior design" p2="3 Months work time"></Card>
        <Card img={img2} p1="Interior design" p2="3 Months work time"></Card>
        <Card img={img3} p1="Interior design" p2="3 Months work time"></Card>
        <Card img={img4} p1="Interior design" p2="3 Months work time"></Card>
        <Card img={img5} p1="Interior design" p2="3 Months work time"></Card>
      </div>
      <div className="text-center">
        <p className="text-[#056088] font-bold text-lg my-20">See more</p>
      </div>
    </div>
  );
};

export default Gallery;
