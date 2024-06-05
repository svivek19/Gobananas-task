import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-20 bg-[#222b38] top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h1 className="font-bold text-white text-2xl">FlowLaunch</h1>
      </div>
    </nav>
  );
};

export default Navbar;
