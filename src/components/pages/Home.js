import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "../Header/Header";
import NavMobile from "../Header/NavMobile";

const HomePage = () => {
  // mobile nav state change
  const [navMobile, setNavMobile] = useState(false);

  // aos init
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 400,
    });
  });
  return (
    <div>
      {" "}
      <Header setNavMobile={setNavMobile} />
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed z-10 top-0 h-full transition-all duration-200`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
    </div>
  );
};

export default HomePage;
