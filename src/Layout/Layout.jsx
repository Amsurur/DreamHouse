import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import { useTranslation } from "react-i18next";
import "./style.css";
import Burger from "../components/Burger/Burger";
import Switcher from "../components/Switcher/Switcher";
const Layout = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const { pathname } = useLocation("twxt");

  const active = localStorage.getItem("i18nextLng");
  const [actv, setActv] = useState(localStorage.getItem("true"));
  return (
    <div className="main  dark:bg-[#343434] ">
      <div className="w-[90%] mx-auto">
        <nav className="md:pt-20 pt-10  w-[90%] grid grid-cols-2 items-center text-white mx-auto absolute">
          <div className="text-white items-center flex gap-10">
            <Link to={"/"}>
              {" "}
              <p className="text-5xl font-bold">DB-</p>
            </Link>
            <div className="lg:block hidden">
              <Switcher />
            </div>
            <span
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              style={{ color: active == "en" ? "#01CD7D" : "black" }}
              onClick={() => changeLanguage("en")}
              value="ru"
            >
              {t("en")}
            </span>
            <span
              data-aos="zoom-in-down"
              data-aos-duration="2000"
              style={{ color: active == "ru" ? "#01CD7D" : "black" }}
              onClick={() => changeLanguage("ru")}
              value="en"
            >
              {t("ru")}
            </span>
          </div>
          <ul className="lg:flex hidden lg:gap-14 gap-10 justify-self-end">
            <Link to={"/datails"}>
              <li
                style={{ color: pathname == "/details" ? "#01CD7D" : "" }}
                className="hover:text-blue-400"
              >
                {t("nav.p1")}
              </li>
            </Link>
            <Link to={"/about"}>
              <li> {t("nav.p2")}</li>
            </Link>
            <Link to={"/services"}>
              <li> {t("nav.p3")}</li>
            </Link>
            <Link to={"/gallery"}>
              <li> {t("nav.p4")}</li>
            </Link>
            <Link to={"/contact"}>
              <li> {t("nav.p5")}</li>
            </Link>
            <Link to={"/Career"}>
              <li> {t("nav.p6")}</li>
            </Link>
            <Link to={"/News"}>
              <li> {t("nav.p7")}</li>
            </Link>
          </ul>
          <div className="lg:hidden justify-self-end">
            <Burger />
          </div>
        </nav>
      </div>
      <Outlet />
      <div className="bg-[#023957] text-white">
        <footer className="w-[90%] mx-auto p-10 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-10 lg:gap-0 items-center">
          <div>
            <p className="text-5xl font-bold mb-5">DB-</p>
            <p>
              Lizenzo street number 12 <br />
              Jakarta, Indonesia
            </p>
            <button className="btn1 mt-7 py-5 px-7 text-white">
              Get directions
            </button>
          </div>
          <ul className="grid gap-5">
            <li className="font-bold text-lg ">Menu</li>
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Service</li>
          </ul>
          <ul className="grid gap-5">
            {" "}
            <li className="font-bold text-lg">Contact</li>
            <li>E-mail</li>
            <li>Mobile</li>
            <li>Whatsapp</li>
            <li>Fax</li>
          </ul>
          <ul className="grid gap-5">
            {" "}
            <li className="font-bold text-lg">Career</li>
            <li>Job</li>
            <li>Part-time</li>
            <li>Internship</li>
            <li>Service</li>
          </ul>
          <ul className="grid gap-5">
            {" "}
            <li className="font-bold text-lg">Business</li>
            <li>Affiliate</li>
            <li>Collaboration</li>
            <li>Investment</li>
            <li>People</li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
