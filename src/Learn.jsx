import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import videoBG from "../public/video/seeVR.mp4";
import { Link } from "react-router-dom";
import "./css/Learn.css";

function Learn() {
  return (
    <div>
      <Navbar />
      <section className="main">
        <video src={videoBG} autoPlay loop muted className="mainVideo"></video>
        <div className="learn-title text-white">
          <h1 className="capitalize text-5xl md:text-7xl">this is quill pro</h1>
          <h5 className="w-8/12 mt-4 text-2xl text-center md:text-3xl">
            Our most advanced headset yet. A whole new way to work, create and
            collaborate.
          </h5>
          <p className="mt-3 md:text-xl   ">Starting at 799.99 USD</p>
          <Link to="/">
            {" "}
            <button class="bg-blue-500 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded-full mt-8">
              Buy now
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Learn;
