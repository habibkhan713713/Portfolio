"use client";
import React from "react";

function Loader() {
  return (
    <>
      <span
        className="rounded-full inline-block  bg-light dark:bg-light animate-bounce  h-[100%] w-[100%]
    
    "
      ></span>
    </>
  );
}

export default function Effect() {
  return (
    <>
      <div className="w-screen h-[70vh] 2xl:px-32 3xl:px-32 flex items-center justify-center dark:bg-dark bg-white dark:text-light">
        <div className="md:h-20 md:w-20 2xl:h-32 2xl:w-32">
          {" "}
          <Loader />
        </div>
      </div>
    </>
  );
}
