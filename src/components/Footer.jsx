import React from "react";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="container mx-auto p-5 flex flex-col md:flex-row items-center justify-between bg-white text-black">
      <div className=" flex flex-row text-blue-400 gap-x-7 text-xl">
        <BsTwitter className="hover:opacity-60 cursor-pointer" />
        <BsFacebook className="hover:opacity-60 cursor-pointer" />
        <BsInstagram className="hover:opacity-60 cursor-pointer" />
      </div>

      <div className="flex -mx-6">
        <a href="#" className="mx-3 hover:opacity-50 duration-150">
          About us
        </a>
        <a href="#" className="mx-3 hover:opacity-50 duration-150">
          Privacy
        </a>
        <a href="#" className="mx-3 hover:opacity-50 duration-150">
          Contact
        </a>
      </div>
    </footer>
  );
};
