import React from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
function ErrorPage() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-6 pt-16 flex-1 text-center min-h-screen flex flex-col items-center border-t-2 border-gray-300 text-gray-700">
        <div>
          <h1 className="text-2xl mt-10 text-gray-900 px-5">
            This page isn't available
          </h1>
        </div>

        <div className=" justify-center flex">
          <p className="text-xl text-center w-1/2 my-5 px-5 leading-7">
            The link may be broken, or the page may have been removed. Check to
            see if the link you're trying to open is correct.
          </p>
        </div>

        <div>
          <button
            className=" bg-sky-600 hover:bg-cyan-500 text-white font-bold
 py-4 px-7 rounded-full text-m"
          >
            back to homepage
          </button>
        </div>
      </main>
    </div>
  );
}

export default ErrorPage;
