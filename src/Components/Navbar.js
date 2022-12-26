import React, { useState } from "react";

const Navbar = ({ getUsersData }) => {
  return (
    <div className="w-full bg-gray-800 flex items-center fixed top-0">
      <div className="h-[70px] container w-full m-auto flex items-center justify-between">
        <h1 className="text-3xl text-stone-200 font-light cursor-pointer">
          Navbar
        </h1>
        <button
          className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto"
          onClick={() => getUsersData()}
        >
          Get User
        </button>
      </div>
    </div>
  );
};

export default Navbar;
