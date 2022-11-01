import React from "react";
import { BsHandbag, BsXLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import "../css/Navbar.css";

export const Navbar = () => {
  // Menu Button
  // Mobile
  const hamburgerBtn = document.querySelector(".hambuger");
  const mobile = document.querySelector(".mobile");

  const navClose = () => {
    mobile.classList.add("hide");
    mobile.classList.remove("show");
  };
  const navOpen = () => {
    mobile.classList.remove("hide");
    mobile.classList.add("show");
  };

  return (
    <div>
      {" "}
      <div className="mt-0 text-center ">
        <h1 className="uppercase p-2 bg-cyan-800 text-white font-bold text-xs">
          free shipping and returns on all quill devices!
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

        <nav className="flex  justify-between  mx-5 lg:hidden">
          <button
            className="text-2xl  px-5 hamburger"
            onClick={() => navOpen()}
          >
            <BiMenu />
          </button>

          <ul className="flex items-start px-5 flex-col bg-white z-10 absolute top-0 left-0 h-screen w-10/12 md:text-5xl text-gray-600 mobile hide">
            <button
              onClick={() => navClose()}
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
            <li className=" py-5 absolute bottom-0 left-0 text-xl bg-gray-200 w-full text-gray-700">
              {" "}
              <Link to="/" className="mx-3 hover:opacity-50 duration-150">
                Support
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
