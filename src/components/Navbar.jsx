import React from "react";
import { BsHandbag } from "react-icons/bs";

export const Navbar = () => {
  return (
    <header className="bg-white text-black py-5">
      <nav className="flex justify-between mx-10">
        <ul className="flex items-center ">
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
        <ul className="flex justify-between items-center">
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
  );
};
