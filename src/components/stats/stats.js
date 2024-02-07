import React from "react";
import { HiChartBar, HiUser, HiGlobe } from "react-icons/hi";

const Stats = () => {
  return (
    <section
      className="pt-24"
      // data-aos="fade-up"
      // data-aos-delay="1200"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-x-6">
            <div className="bg-white w-20 h-20 rounded-full flex items-center  justify-center text-blue text-2xl lg:text-4xl">
              <HiChartBar />
            </div>
            <div>
              <div className="text-3xl font-bold lg:text-[40px] lg:mb-2">
                1M+
              </div>
              <div className="text-black">Digital Currenciens Exchanged </div>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <div className="bg-white w-20 h-20 rounded-full flex items-center  justify-center text-blue text-2xl lg:text-4xl">
              <HiUser />
            </div>
            <div>
              <div className="text-2xl font-bold lg:text-[40px] lg:mb-2">
                500k
              </div>
              <div className="text-black">Trusted Wallets Investors </div>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <div className="bg-white w-20 h-20 rounded-full flex items-center  justify-center text-blue text-3xl lg:text-5xl">
              <HiGlobe />
            </div>
            <div>
              <div className="text-3xl font-bold lg:text-[40px] lg:mb-2 text-black">
                20
              </div>
              <div className="text-black">Countries Supported </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
