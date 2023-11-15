import React, { useEffect } from "react";

import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useTranslation } from "react-i18next";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Story from "./pages/Story/Story";

import News from "./pages/News/News";
import Details from "./pages/Details/Details";
import Career from "./pages/Career/Career";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [age, setAge] = React.useState("");
  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        ,
        {
          path: "datails",
          element: <Details />,
        },
        ,
        {
          path: "career",
          element: <Career />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "gallery",
          element: <Gallery />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        ,
        {
          path: "Story",
          element: <Story />,
        },

        {
          path: "News",
          element: <News />,
        },
      ],
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
