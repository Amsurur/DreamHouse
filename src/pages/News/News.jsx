import React from "react";
import news from "../../assets/News.svg";
import card from "../../assets/imgNew.svg";
import card1 from "../../assets/img1New.svg";
import card2 from "../../assets/img2New.svg";
import "../Home/style.css";
import Card from "../../components/Card/Card";
const News = () => {
  return (
    <div>
      <div className="sec1Bg md:p-24 py-24 px-10 text-center">
        <h1 className="text-5xl font-bold mt-40 mb-10 text-white">
          Article and news about <br /> property and constructions
        </h1>
      </div>
      <div className="relative ">
        <div className="mt-20 w-[90%] bottom-[250px] left-10 absolute mx-auto">
          <div className="relative w-[90%] mx-auto">
            <img src={news} alt="" />
            <div className="absolute bottom-6 ml-5 ">
              <div className="grid grid-cols-2 w-[90%] mx-auto text-white">
                <p className="text-3xl font-bold">Today’s property news</p>
                <p className="justify-self-end w-[50%]">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry'
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="news p-[300px] mt-40 mb-[600px]"></div>
        <div className=" absolute text-center lg:text-start top-[450px]">
          <div className="w-[90%] lg:grid-cols-3   gap-10 grid mx-auto">
            <Card
              img={card}
              p1="Tips of the week"
              p2="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'"
            ></Card>
            <Card
              img={card1}
              p1="House price is high now"
              p2="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'"
            ></Card>
            <Card
              img={card2}
              p1="Good investment in property"
              p2="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'"
            ></Card>
          </div>
        </div>
      </div>
      <div className="lg:mb-0 mb-[2000px]"></div>
    </div>
  );
};

export default News;
