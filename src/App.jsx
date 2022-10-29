import { Footer } from "./components/Footer";
import { BsHandbag } from "react-icons/bs";

function App() {
  return (
    <div>
      <div className="min-h-screen flex flex-col text-white">
        {/* navbar */}
        <header className="bg-white text-black py-5">
          <nav className="flex justify-between mx-10">
            <ul className="flex items-center ">
              <li className="flex justify-between mr-5 cursor-pointer">
                {" "}
                <a>
                  <img
                    src="./logos/logo.svg"
                    width={50}
                    alt="vr logo"
                    // className="mr-1 "
                  />{" "}
                </a>
                {/* <a href="#" className="mx-3 hover:opacity-50 duration-150"> */}
                {/* <p className="text-lg">seeVR</p> */}
                {/* </a> */}
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
        <main className="container mx-auto px-6 pt-16 flex-1 text-center grid gap-4 grid-cols-3 grid-rows-3">
          <div className="line"></div>
          <div className="col-start-3 row-start-2 self-center ">
            {" "}
            <div>
              {" "}
              <h1 className="font-bold text-6xl tracking-wide uppercase product-title">
                Meet quill pro
              </h1>
              <p className="mt-5 text-lg lowercase product-desc">
                Unlock new prespectives into how you work, create and
                collaborate.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
