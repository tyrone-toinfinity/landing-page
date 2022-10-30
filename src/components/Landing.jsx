import React from "react";

export const Landing = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col text-white">
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
      </div>
    </div>
  );
};
