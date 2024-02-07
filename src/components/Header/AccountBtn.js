import React from "react";

const AccountBtns = () => {
  return (
    <div className="flex items-center font-medium">
     
      {/* separator */}
      <span className="mx-9 text-black/20 font-thin">|</span>

      <button className="btn h-[52px] text-white px-8">Register</button>
    </div>
  );
};

export default AccountBtns;
