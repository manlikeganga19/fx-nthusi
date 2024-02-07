import React from "react";

const AccountBtns = () => {
  return (
    <div className="flex items-center font-medium">
     
      {/* separator */}
      <span className="mx-9 text-black/20 font-thin">|</span>

      <a href="/register" className="btn h-[52px] text-white px-8">Register</a>
    </div>
  );
};

export default AccountBtns;
