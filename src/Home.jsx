import React from "react";
import { Footer } from "./components/Footer";
import { Landing } from "./components/Landing";
import { Navbar } from "./components/Navbar";
import "./css/Home.css";

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
