import React from "react";
import { Navbar } from "./components/Navbar";
import { Landing } from "./components/Landing";
import { Footer } from "./components/Footer";
import "./css/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero-image">
      <Navbar />

      <Landing />

      <Footer />
    </div>
  );
}

export default Home;
