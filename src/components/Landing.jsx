import React from "react";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import "../css/Landing.css";

export const Landing = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col text-white">
        <main className="container mx-auto px-6 md:pt-16 mt-32 md:mt-0 flex-1 text-center grid gap-1 grid-cols-3 grid-rows-3">
          <div className="line"></div>
          <div className="md:col-start-3 md:row-start-2  md:self-center col-span-2   row-start-1 col-start-2  justify-items-center self-center">
            <div>
              <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl tracking-wide uppercase product-title">
                Meet quill pro
              </h1>
              <p className="mt-5 text-lg lowercase product-desc">
                Unlock new prespectives into how you work, create and
                collaborate.
              </p>
              <div className="flex justify-center gap-5  items-center btn-landing">
                <button
                  className=" bg-white mt-5 text-sky-600 font-bold 
 py-3 px-5 rounded-full hover:bg-blue-100 "
                >
                  <Link to="Shop"> Buy Now</Link>
                </button>
                <span>
                  <Link
                    to="Learn"
                    className="flex mt-5 items-center gap-2 hover:bg-blue-100"
                  >
                    <BsChevronRight className="chev text-3xl text-sky-600" />{" "}
                    <p>Learn More</p>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
