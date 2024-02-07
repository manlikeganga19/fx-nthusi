import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Image from "../../assets/images/wepik-export-20240207112037uSdn.jpeg";

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row">
          {/* hero text */}
          <div className="flex-1">
            <div className="bg-white/40 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px]">
              <div className="flex items-center justify-between text-sm lg:text-base">
                <div className="bg-white text-black rounded-full font-medium py-1 px-4">
                  75% SAVE
                </div>
                <div>For the Black Friday Weekend</div>
              </div>
            </div>
            <h1 className="text-[32px] lg:text-[64px] font-bold leading-tight mb-6">
              Fastest & secure platform to invest in trading.
            </h1>
            <p className="max-w-[440px] leading-relaxed mb-8">
              Buy and sell cryptocurrencies , trusted by 10M walletes with over
              30 million in transactions.
            </p>
            <button className="btn text-white gap-x-6 pl-6 text-sm lg:h-16 lg:text-base">
              Free Trial
              <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" />
            </button>
          </div>
          {/* hero image */}
          <div className="flex-1 mt-6 ">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
