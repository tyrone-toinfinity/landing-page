import React from "react";
import { BsHandbag, BsXLg, BsHeadset } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import "../css/Navbar.css";

export const Navbar = () => {
  // Menu Buttonå
  const [open, setOpen] = useState(false);

  return (
    <div>
      {" "}
      <div className="mt-0 text-center ">
        <h1 className="uppercase p-2 bg-cyan-800 text-white font-bold text-xs">
          free shipping and returns on all VR devices!
        </h1>
      </div>
      <header className="bg-white text-black py-5 border-b-2 border-zinc-200">
        <nav className="lg:flex justify-between max-w-7xl mx-auto hidden   ">
          <ul className="flex items-center mx-20">
            <li className="flex justify-between mr-5 cursor-pointer">
              {" "}
              <Link to="/">
                {" "}
                <img src="./logos/logo.svg" width={50} alt="vr logo" />{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/" className="mx-3 hover:opacity-50 duration-150">
                Shop
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/" className="mx-3 hover:opacity-50 duration-150">
                Our Technologies
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/" className="mx-3 hover:opacity-50 duration-150">
                Build With Us
              </Link>
            </li>
          </ul>
          <ul className="flex justify-between items-center  mx-20">
            <li>
              {" "}
              <Link to="/" className="mx-3 hover:opacity-50 duration-150">
                Support
              </Link>
            </li>
            <li>
              <BsHandbag className=" hover:text-blue-900 text-lg cursor-pointer ml-4" />
            </li>
          </ul>
        </nav>

        {/* Mobile menu */}
        <div className={`${open ? "background " : ""}`}></div>

        <nav
          className={`flex  justify-between lg:hidden 
        `}
        >
          <button className="text-2xl  px-5" onClick={() => setOpen(true)}>
            <BiMenu />
          </button>

          <ul
            className={`flex items-start px-5 flex-col bg-white z-10 absolute top-0 left-0  h-full w-10/12 text-3xl text-gray-600 md:text-5xl
              ${open ? "show" : "hide"}`}
          >
            <button
              onClick={() => setOpen(false)}
              className="text-xl absolute top-0 right-0 p-5 text-zinc-600"
            >
              <BsXLg />
            </button>
            <li className="flex my-5 text-xl self-center font-bold">
              {" "}
              <img
                src="./logos/logo.svg"
                width={30}
                alt="vr logo"
                className=" mr-2"
              />{" "}
              seeVR
            </li>
            <li className="my-5">
              {" "}
              <Link to="/" className="mx-3 hover:opacity-50 duration-150">
                Shop
              </Link>
            </li>
            <li className="my-5">
              {" "}
              <Link to="/" className="mx-3 hover:opacity-50 duration-150">
                Our Technologies
              </Link>
            </li>
            <li className="my-5">
              {" "}
              <Link to="/" className="mx-3 hover:opacity-50 duration-150">
                Build With Us
              </Link>
            </li>
            <li className=" py-5 font-bold  text-xl  bg-gray-100 w-full text-gray-500 absolute bottom-0 left-0  ">
              {" "}
              <Link
                to="/"
                className="mx-3 hover:opacity-50 duration-150 flex flex-row gap-5 items-center justify-end "
              >
                Support <BsHeadset />
              </Link>
            </li>
          </ul>

          <ul className="items-center ">
            <li>
              <Link to="/">
                <img src="./logos/logo.svg" width={50} alt="vr logo" />{" "}
              </Link>
            </li>
          </ul>

          <ul className="items-center ">
            <li className=" px-5 hover:text-blue-900 ">
              <BsHandbag className="text-lg cursor-pointer" />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
