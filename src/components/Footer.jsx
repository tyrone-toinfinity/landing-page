import React from "react";

export const Footer = () => {
  return (
    <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between ">
      <div className=" flex flex-row">
        <img src="./logos/logo.svg" width={50} alt="vr logo" className="mr-2" />{" "}
        <p>seeVR</p>
      </div>

      <div className="flex -mx-6">
        <a href="#" className="mx-3 hover:opacity-80 duration-150">
          About us
        </a>
        <a href="#" className="mx-3 hover:opacity-80 duration-150">
          Privacy
        </a>
        <a href="#" className="mx-3 hover:opacity-80 duration-150">
          Contact
        </a>
      </div>
      <div></div>
    </footer>
  );
};
