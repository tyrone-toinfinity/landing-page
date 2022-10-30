import React from "react";
import { BsHandbag } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div>
      {" "}
      <div className="mt-0 text-center ">
        <h1 className="uppercase p-2 bg-cyan-800 text-white font-bold text-xs">
          free shipping and returns on all quill devices!
        </h1>
      </div>
      <header className="bg-white text-black py-5 border-b-2 border-zinc-200">
        <nav className="flex justify-between max-w-7xl mx-auto ">
          <ul className="flex items-center mx-20">
            <li className="flex justify-between mr-5 cursor-pointer">
              {" "}
              <a>
                <img src="./logos/logo.svg" width={50} alt="vr logo" />{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="#" className="mx-3 hover:opacity-50 duration-150">
                Shop
              </a>
            </li>
            <li>
              {" "}
              <a href="#" className="mx-3 hover:opacity-50 duration-150">
                Our Technologies
              </a>
            </li>
            <li>
              {" "}
              <a href="#" className="mx-3 hover:opacity-50 duration-150">
                Build With Us
              </a>
            </li>
          </ul>
          <ul className="flex justify-between items-center  mx-20">
            <li>
              {" "}
              <a href="#" className="mx-3 hover:opacity-50 duration-150">
                Support
              </a>
            </li>
            <li>
              <BsHandbag className=" hover:text-blue-900 text-lg cursor-pointer ml-4" />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
