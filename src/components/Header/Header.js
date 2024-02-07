import React from "react";
import Nav from "./Nav";
import { CgMenuRight } from "react-icons/cg";
import AccountBtns from "./AccountBtn";

const Header = ({ setNavMobile }) => {
  return (
    <header
      className="py-[30px] lg:pt-[60px]"
      data-aos="fade-down"
      data-aos-delay="900"
      data-aos-duration="2000"
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/">
          <p className="text-3xl bold">FX NTHUSI</p>
        </a>

        <div className="hidden lg:flex gap-x-[55px]">
          <Nav />
          <AccountBtns/>
        </div>
        <div
          onClick={() => setNavMobile(true)}
          className="lg:hidden cursor-pointer"
        >
          <CgMenuRight className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
