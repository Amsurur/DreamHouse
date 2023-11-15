import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const MyNabar = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <ul className="  text-center leading-7 lg:gap-14 gap-10 justify-self-end">
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
    </div>
  );
};

export default MyNabar;
