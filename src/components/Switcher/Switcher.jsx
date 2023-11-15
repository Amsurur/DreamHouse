import { useState } from "react";
import useDarkSide from "../../hooks/useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  const defaultProperties = {
    dark: {
      circle: {
        r: 5,
      },
      mask: {
        cx: "75%",
        cy: "20%",
      },
      svg: {
        transform: "rotate(-800deg)",
      },
      lines: {
        opacity: 0,
      },
    },
    light: {
      circle: {
        r: 4,
      },
      mask: {
        cx: "40%",
        cy: "10%",
      },
      svg: {
        transform: "rotate(200deg)",
      },
      lines: {
        opacity: 1,
      },
    },
    springConfig: { mass: 4, tension: 100, friction: 35 },
  };

  return (
    <>
      <div>
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={50}
          animationProperties={defaultProperties}
          moonColor={"black  "}
          sunColor={"orange"}
        />
      </div>
    </>
  );
};
export default Switcher;
